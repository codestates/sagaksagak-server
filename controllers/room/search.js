const { user, room } = require('../../models');
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    const { userId } = req.headers;
    const { q } = req.query;
    if (!userId || !q) {
        res.status(400).send({
            message: 'bad request'
        })
    } else {
        let keyword = await decodeURI(q)
        const roomInfo = await room.findAll({
            where: { roomName: { [Op.like]: `%${keyword}%` }, valid: true }, raw: true
        })

        if (!roomInfo) {
            res.status(404).send({
                message: 'not found'
            })
        } else {
            let rooms = roomInfo.map(el => {
                return {
                    roomName: el.roomName,
                    roomUuid: el.uuid,
                    usersNum: el.entry !== null ? JSON.parse(el.entry).length : 0,
                    category: el.category
                }
            })
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