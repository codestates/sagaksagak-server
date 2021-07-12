const { room, user } = require('../../models')
const { roomList, deduplication } = require('./util')
const { verifyAccessToken } = require('../../middlewares/token')
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    let { userid } = req.headers;
    let userId = Number(userid)
    let { q, page } = req.query;
    page = Number(page)
    if (!q) {
        const roomInfo = await room.findAll({
            where: { valid: true }, raw: true
        })
        const rooms = roomList(roomInfo)

        if (userId !== 1) {
            let userToken = verifyAccessToken(req);
            if (userToken !== null) {
                if (page === 0) {
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
                        rooms: rooms.slice(page * 9, 9 + (page * 9)),
                        recommend: recommend.slice(0, 3)
                    })
                } else {
                    res.status(200).send({
                        rooms: rooms.slice(page * 9, 9 + (page * 9))
                    })
                }
            } else {
                res.status(403).send({
                    message: 'access token expired'
                })
            }
        } else {
            if (page === 0) {
                let recommendToGuest = await room.findAll({
                    where: { valid: true },
                    order: [['createdAt', 'DESC']],
                    raw: true
                })
                recommendToGuest = roomList(recommendToGuest)
                console.log(recommendToGuest)
                res.status(200).send({
                    rooms: rooms.slice(page * 9, 9 + (page * 9)),
                    recommend: recommendToGuest.slice(0, 3)
                })
            } else {
                res.status(200).send({
                    rooms: rooms.slice(page * 9, 9 + (page * 9))
                })
            }
        }
    } else {
        if (!userId || !q) {
            res.status(400).send({
                message: 'bad request'
            })
        } else {

            let keyword = await decodeURI(q)
            keyword = keyword.split(' ');
            let roomInfo = [];
            for (let i = 0; i < keyword.length; i++) {
                roomInfo = roomInfo.concat(await room.findAll({
                    where: {
                        [Op.or]: [
                            { roomName: { [Op.like]: `%${keyword[i]}%` }, valid: true },
                            { category: { [Op.like]: `%${keyword[i]}%` }, valid: true }
                        ]
                    }, raw: true
                }))
            }

            roomInfo = await deduplication(roomInfo)


            if (roomInfo.length === 0) {
                res.status(404).send({
                    message: 'not found'
                })
            } else {
                let rooms = await roomList(roomInfo);

                if (userId !== 1) {
                    let search;

                    const userInfo = await user.findOne({
                        where: { id: userId }, raw: true
                    })
                    if (page === 0) {
                        if (userInfo.search === null) {
                            search = [keyword]
                        } else {
                            search = JSON.parse(userInfo.search);
                            if (search.length >= 2) {
                                search.pop();
                                search.unshift(keyword);
                            } else {
                                search.unshift(keyword);
                            }
                        }

                        await user.update({
                            search: JSON.stringify(search)
                        }, { where: { id: userId } })
                    }

                    res.status(200).send({
                        rooms: rooms.slice(page * 9, 9 + (page * 9))
                    })
                } else {
                    res.status(200).send({
                        rooms: rooms.slice(page * 9, 9 + (page * 9)),
                    })
                }
            }
        }
    }
}