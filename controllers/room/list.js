const { room } = require('../../models')
const { roomList } = require('./util')

module.exports = async (req, res) => {
    const roomInfo = await room.findAll({
        where: { valid: true }, raw: true
    })

    // let rooms = roomInfo.map(el => {
    //     return {
    //         roomName: el.roomName,
    //         roomUuid: el.uuid,
    //         usersNum: el.entry !== null ? JSON.parse(el.entry).length : 0,
    //         category: el.category
    //     }
    // })
    let rooms = roomList(roomInfo)
    console.log(rooms)
    res.status(200).send({
        rooms,
        recommend: rooms.slice(0, 3)
    })
}