const { user, room, join_log } = require('../../models')
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
                res.status(200).send({
                    users: room
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
                where: { uuid: roomId, userId }, raw: true
            })
            if (!roomInfo) {
                const roomOne = await room.findOne({
                    where: { uuid: roomId }, raw: true
                })

                let users = {};
                users[peerId] = username;
                let entry = JSON.parse(roomOne.entry);
                entry.push(users);
                entry = JSON.stringify(entry)
                await room.update({
                    entry: entry
                }, { where: { uuid: roomId } })
            } else {
                let users = {};
                users[peerId] = username;
                users = JSON.stringify([users])
                await room.update({
                    entry: users
                }, { where: { uuid: roomId } })
            }

            socket.join(roomId)

            socket.broadcast.to(roomId).emit('user-connected', peerId, username)

            socket.on('disconnect', async () => {
                const roomInfo = await room.findOne({
                    where: { uuid: roomId }, raw: true
                })
                let entry = JSON.parse(roomInfo.entry)
                if (entry.length === 1) {
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
                socket.broadcast.to(roomId).emit('user-disconnected', peerId, username)
            })
        })
    }
}
