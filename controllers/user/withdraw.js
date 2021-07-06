const { user, todo, room, join_log } = require('../../models');
const { verifyAccessToken } = require('../../middlewares/token');

module.exports = async (req, res) => {
    const userToken = await verifyAccessToken(req)
    if(!userToken){
        res.status(403).send({
            message: 'access token expired'
        })
    }else{
        const userId = req.params.id;
        const userPass = req.body.password;

        const userInfo = await user.findOne({
            where: {
                id: userId
            }, raw: true
        })
        if (userPass !== userInfo.password) {
            res.status(401).send({
                message: 'wrong password'
            })
        } else {
            await user.destroy({
                where: { id: userInfo.id }
            })
            await todo.destroy({
                where: { userId: userInfo.id }
            })
            await room.destroy({
                where: { userId: userInfo.id }
            })
            await join_log.destroy({
                where: { userId: userInfo.id }
            })
            res.status(205).send({
                message: 'ok'
            })
        }
    }

}