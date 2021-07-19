const { room, join_log } = require('../../models');
const { verifyAccessToken } = require('../../middlewares/token');

module.exports = async (req, res) => {
    const userInfo = verifyAccessToken(req);

    if (userInfo !== null) {
        const log = await join_log.findAll({
            where: { userId: userInfo.id },
            include: [{ model: room, attributes: ['roomName', 'category'] }], raw: true
        })
        const records = await log.map(el => {
            let date = el.updatedAt
                date.setMinutes( date.getMinutes() + 540 );
            return {
                roomName: el['room.roomName'],
                category: el['room.category'],
                workHours: el.workHours,
                updatedAt: date
            }
        })
        let totalHours = {}
        await records.map(el => {
            if (!totalHours[el.category]) {
                totalHours[el.category] = el.workHours
            } else {
                totalHours[el.category] = totalHours[el.category] + el.workHours
            }
        })
        totalHours = Object.entries(totalHours)
        totalHours = totalHours.map(el => {
            return {
                category: el[0],
                hours: el[1]
            }
        })
        res.status(200).send({
            records,
            totalHours
        })
    } else {
        res.status(403).send({
            message: 'access token expired'
        })
    }
}