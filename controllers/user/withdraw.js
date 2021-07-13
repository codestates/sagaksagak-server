const { user, todo, join_log } = require('../../models');
const { verifyRefreshToken } = require('../../middlewares/token');

module.exports = async (req, res) => {
    const userToken = await verifyRefreshToken(req)
    if (userToken === null) {
        res.status(403).send({
            message: 'refresh token expired'
        })
    } else {
        const userId = req.params.id;
        const password = req.body.password;
        if (!userId || !password) {
            res.status(400).send({
                message: 'bad request'
            })
        } else {
            const userInfo = await user.findOne({
                where: {
                    id: userId
                }
            })
            if (!userInfo.comparePassword(password)) {
                res.status(401).send({
                    message: 'wrong password'
                })
            } else {
                await user.destroy({
                    where: { id: userId }
                })
                await todo.destroy({
                    where: { userId }
                })
                await join_log.destroy({
                    where: { userId }
                })
                res.status(205).send({
                    message: 'ok'
                })
            }
        }
    }
}