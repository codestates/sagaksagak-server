const { user, room } = require('../../models');
const { roomList, deduplication } = require('./util')
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    let { userid } = req.headers;
    let userId = Number(userid)
    const { q } = req.query;
    if (!userId || !q) {
        res.status(400).send({
            message: 'bad request'
        })
    } else {
        let keyword = await decodeURI(q)
        keyword = keyword.split(' ');
        let roomInfo = [];
        for (let i = 0; i < keyword.length; i++) {
            roomInfo.push(await room.findAll({
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

                res.status(200).send({
                    rooms
                })
            } else {
                res.status(200).send({
                    rooms
                })
            }
        }
    }
}