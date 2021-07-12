const { user, room } = require('../../models');
const { roomList, deduplication } = require('./util')
const { Op } = require("sequelize");
const { v4: uuidV4 } = require('uuid')

module.exports = async (req, res) => {
    await room.create({
        roomName: "코딩코딩코딩",
        userId: 1,
        uuid: uuidV4(),
        category: '코딩',
        entry: JSON.stringify([{"674fc5c3-c7cc-415b-89ff-50cf9f5208b8":"GUEST14916"},{"4e71982e-7fa4-4ec3-ada0-0730f9b8f2b0":"GUEST49244"}])
    })
    res.status(200).send()
}