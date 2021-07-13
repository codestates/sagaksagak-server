const { room, user } = require('../../models')
const { roomList, deduplication } = require('./util')
const { verifyAccessToken } = require('../../middlewares/token')
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    let { userid } = req.headers;
    let userId
    if (userid) {
        userId = Number(userid)
    }
    let { q, page } = req.query;
    page = Number(page)
    if (!q) {
        const roomInfo = await room.findAll({
            where: { valid: true },
            order: [['createdAt', 'DESC']],
            raw: true
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
                                    let findRoom = await room.findOne({
                                        where: {
                                            [Op.or]: [
                                                { roomName: { [Op.like]: `%${keyword[i][j]}%` }, valid: true },
                                                { category: { [Op.like]: `%${keyword[i][j]}%` }, valid: true }
                                            ]
                                        },
                                        order: [['updatedAt', 'DESC']],
                                        raw: true
                                    })
                                    if (findRoom !== null) {
                                        search = search.concat(findRoom)
                                    }
                                }
                            } else {
                                let findRoom = await room.findOne({
                                    where: {
                                        [Op.or]: [
                                            { roomName: { [Op.like]: `%${keyword[i]}%` }, valid: true },
                                            { category: { [Op.like]: `%${keyword[i]}%` }, valid: true }
                                        ]
                                    },
                                    order: [['updatedAt', 'DESC']],
                                    raw: true
                                })
                                if (findRoom !== null) {
                                    search = search.concat(findRoom)
                                }
                            }
                        }
                    }
                    if (userInfo.category !== null) {
                        let userCategory = JSON.parse(userInfo.category);
                        for (let i = 0; i < userCategory.length; i++) {
                            let findRoom = await room.findOne({
                                where: { category: String(Object.keys(userCategory[i]).join()), valid: true },
                                order: [['updatedAt', 'DESC']],
                                raw: true
                            })
                            if (findRoom !== null) {
                                recommends = recommends.concat(findRoom)
                            }
                        }
                    } else {
                        recommends = recommends.concat(await room.findAll({
                            where: { valid: true },
                            order: [['updatedAt', 'DESC']],
                            raw: true
                        }))
                    }
                    let recommend = search.concat(recommends);
                    recommend = deduplication(recommend)
                    recommend = roomList(recommend)
                    res.status(200).send({
                        rooms: rooms.slice(page * 9, 9 + (page * 9)),
                        recommend: recommend.slice(0, 5)
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
                    order: [['updatedAt', 'DESC']],
                    raw: true
                })
                recommendToGuest = roomList(recommendToGuest)
                res.status(200).send({
                    rooms: rooms.slice(page * 9, 9 + (page * 9)),
                    recommend: recommendToGuest.slice(0, 5)
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
            console.log('keyword', keyword)
            let roomInfo = [];
            for (let i = 0; i < keyword.length; i++) {
                roomInfo = roomInfo.concat(await room.findAll({
                    where: {
                        [Op.or]: [
                            { roomName: { [Op.like]: `%${keyword[i]}%` }, valid: true },
                            { category: { [Op.like]: `%${keyword[i]}%` }, valid: true }
                        ]
                    },
                    order: [['updatedAt', 'DESC']],
                    raw: true
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