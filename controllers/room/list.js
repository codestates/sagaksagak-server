const { room, user } = require('../../models')
const { roomList, deduplication } = require('./util')
const { verifyAccessToken } = require('../../middlewares/token')
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    const roomInfo = await room.findAll({
        where: { valid: true }, raw: true
    })
    const rooms = roomList(roomInfo)
 
    if (req.headers["authorization"]) {
        let userToken = verifyAccessToken(req);
        if (userToken !== null) {
            const userInfo = await user.findOne({
                where: { id: userToken.id }
            })
            let search = [];
            let recommends = [];
            if (userInfo.search !== null) {
                let keyword = JSON.parse(userInfo.search)
                for (let i = 0; i < keyword.length; i++) {
                    if (Array.isArray(keyword[i])) {
                        for (let j = 0; j < keyword[i].length; j++) {
                            search = search.concat(await room.findAll({
                                where: {
                                    [Op.or]: [
                                        { roomName: { [Op.like]: `%${keyword[i][j]}%` }, valid: true },
                                        { category: { [Op.like]: `%${keyword[i][j]}%` }, valid: true }
                                    ]
                                }, raw: true
                            }))
                        }
                    } else {
                        search = search.concat(await room.findAll({
                            where: {
                                [Op.or]: [
                                    { roomName: { [Op.like]: `%${keyword[i]}%` }, valid: true },
                                    { category: { [Op.like]: `%${keyword[i]}%` }, valid: true }
                                ]
                            }, raw: true
                        }))
                    }
                }
            }
            if (userInfo.category !== null) {
                let userCategory = JSON.parse(userInfo.category);
                for (let i = 0; i < userCategory.length; i++) {
                    recommends = recommends.concat(await room.findAll({
                        where: { category: String(Object.keys(userCategory[i]).join()), valid: true },
                        raw: true
                    }))
                }
            }
            let recommend = search.concat(recommends);
            recommend = deduplication(recommend)
            recommend = roomList(recommend)
            res.status(200).send({
                rooms,
                recommend: recommend.slice(0, 3)
            })
        } else {
            res.status(403).send({
                message: 'access token expired'
            })
        }
    } else {
        res.status(200).send({
            rooms,
            recommend: rooms.slice(0, 3)
        })
    }
}