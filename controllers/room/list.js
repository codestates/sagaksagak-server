const { room } = require('../../models')

module.exports = async (req, res) => {
    const roomInfo = await room.findAll({
        where: { valid: true }, raw: true
    })

    let rooms = roomInfo.map(el => {
        return {
            roomName: el.roomName,
            roomUuid: el.uuid,
            usersNum: el.entry.length
        }
    })
    res.status(200).send({
        rooms
    })
}