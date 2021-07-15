const { user, room, join_log } = require('../../models')
const { interestUpdate } = require('./util')
const { v4: uuidV4 } = require('uuid')
module.exports = {
    createRoom: async (req, res) => {
        const { userId, category, roomName } = req.body
        const uuid = uuidV4()
        await room.create({
            roomName,
            category,
            uuid,
            userId: userId
        })
        res.status(201).send({
            roomId: uuid
        })
    },
    joinRoom: async (req, res) => {
        const roomId = req.params.roomId;
        const roomInfo = await room.findOne({
            where: { uuid: roomId }, raw: true
        })
        if (roomInfo.entry === null) {
            res.status(200).send({
                message: 'ok'
            })
        } else {
            let room = JSON.parse(roomInfo.entry)
            if (room.length < 6) {
                if (String(Object.keys(room[0]).join()) === "DUMMY") {
                    room.shift()
                }
                let users = await room.map(el => {
                    return {
                        peerId: Object.keys(el).join(),
                        username: el[Object.keys(el).join()]
                    }
                })
                res.status(200).send({
                    users
                })
            } else {
                res.status(403).send({
                    message: 'full room'
                })
            }
        }
    },
    io: (socket) => {
        socket.on('join-room', async (roomId, peerId, userId, username) => {
            const roomInfo = await room.findOne({
                where: { uuid: roomId }, raw: true
            })
            if (roomInfo.entry !== null) {
                let users = {};
                users[peerId] = username;
                let entry = JSON.parse(roomInfo.entry);

                entry.push(users);
                entry = JSON.stringify(entry)
                await room.update({
                    entry: entry
                }, { where: { uuid: roomId } })
                socket.join(roomId)
                socket.broadcast.to(roomId).emit('user-connected', peerId, username)
            } else {
                let users = {};
                users[peerId] = username;
                users = JSON.stringify([users])
                await room.update({
                    entry: users
                }, { where: { uuid: roomId } })
                socket.join(roomId)
                socket.broadcast.to(roomId).emit('user-connected', peerId, username)
            }
            if (userId !== 1 && userId) {
                let [find, create] = await join_log.findOrCreate({
                    where: { roomId: roomInfo.id, userId },
                    defaults: { roomId: roomInfo.id, userId }
                })
                if (find) {
                    await join_log.update({
                        userId
                    }, { where: { roomId: roomInfo.id, userId } })
                }

                // 카테고리 업데이트(카테고리별 선호도 점수 주기)
                const userCategory = await user.findOne({
                    where: { id: userId },
                    attributes: ['interest'],
                    raw: true
                })
                let target;
                if (userCategory.interest !== null) {
                    target = JSON.parse(userCategory.interest)
                } else {
                    target = [{'코딩': 0}, {'국내입시': 0}, {'해외입시': 0}, {'영어': 0}, {'제2외국어': 0},
                    {'취업': 0}, {'자격증': 0}, {'공무원': 0}, {'예체능': 0}, {'자유': 0}]
                }
                let interest = interestUpdate(target, [roomInfo.category])

                await user.update({
                    interest
                }, { where: { id: userId } })
            }

            socket.on('camera-off', async (peerId, username) => {
                socket.broadcast.to(roomId).emit('user-camera-off', peerId, username)
            })

            socket.on('camera-on', async (peerId, username) => {
                socket.broadcast.to(roomId).emit('user-camera-on', peerId, username)
            })

            socket.on('disconnect', async () => {
                const roomInfo = await room.findOne({
                    where: { uuid: roomId }, raw: true
                })
                let entry = JSON.parse(roomInfo.entry)
                if (entry !== null) {
                    if (entry[0][peerId] === username && Object.keys(entry[0]).join() !== 'DUMMY') {
                        await room.update({
                            valid: false,
                            entry: null
                        }, { where: { uuid: roomId } })
                    } else {
                        let newEntry = entry.filter(el => el[peerId] !== username);
                        newEntry = JSON.stringify(newEntry)
                        await room.update({
                            entry: newEntry
                        }, { where: { uuid: roomId } })
                    }
                }
                socket.broadcast.to(roomId).emit('user-disconnected', peerId, username)
                if (userId !== 1 && userId) {

                    // join_log테이블 workHours컬럼 계산 후 저장
                    let log = await join_log.findOne({
                        where: {
                            roomId: roomInfo.id,
                            userId
                        }, raw: true
                    })

                    await join_log.update({
                        workHours: log.workHours + ((new Date() - log.updatedAt) / 1000 / 60)
                    }, { where: { roomId: roomInfo.id, userId }})
                }
            })
        })
    }
}
