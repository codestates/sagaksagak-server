const { room } = require('../../models')
const { roomList } = require('./util')

module.exports = async (req, res) => {
    const roomInfo = await room.findAll({
        where: { valid: true }, raw: true
    })

    let rooms = roomList(roomInfo)

    res.status(200).send({
        rooms,
        recommend: rooms.slice(0, 3)
    })
}