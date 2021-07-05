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
        if (roomInfo.entry.length < 6) {
            res.status(200).send({
                users: roomInfo.entry
            })
        } else {
            res.status(403).send({
                message: 'full room'
            })
        }
    },
    io: (socket) => {
        socket.on('join-room', async (roomId, peerId, userId, username) => {
            const roomInfo = await room.findOne({
                where: { uuid: roomId, userId }, raw: true
            })
            if (!roomInfo) {
                const room1 = await room.findOne({
                    where: { uuid: roomId }, raw: true
                })
                let users = {};
                users[peerId] = username;
                room1.entry.push(users);
                await room.update({
                    entry: room1.entry
                }, { where: { uuid: roomId }})
            } else {
                let users = {};
                users[peerId] = username;
                await room.update({
                    entry: [users]
                }, { where: { uuid: roomId } })
            }

            socket.join(roomId)

            socket.broadcast.to(roomId).emit('user-connected', peerId, username)

            socket.on('disconnect', async () => {
                const room2 = await room.findOne({
                    where: { uuid: roomId }, raw: true
                })
                if (room2.entry.length === 1) {
                    await room.update({
                        valid: false
                    }, { where: { uuid: roomId } })
                } else {
                    let newEntry = room2.entry.filter(el => el[peerId] !== username);
                    await room.update({
                        entry: newEntry
                    }, { where: { uuid: roomId } })
                }
                socket.broadcast.to(roomId).emit('user-disconnected', peerId, username)
            })
        })
    }
}
