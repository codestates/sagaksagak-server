const { user } = require('../../../models');
const { verifyAccessToken } = require('../../../middlewares/token');

module.exports = async (req, res) => {
    const userToken = await verifyAccessToken(req)

    const user2 = req.body.newusername;
   

    if(!userToken){
        res.status(403).send({
            message: 'access token expired'
        })
    }else{
        const userId = req.params.id;
        const userName = await user.findOne({
            where: {
                username: user2
            }
        })
        if(userName){
            res.status(409).send({
                message: 'username exist'
            })
        } else {
            await user
                .update({
                    username: req.body.newusername
                }, { where: { id: userId } })
            res.status(200).send({
                message: 'ok'
            })
        }
    }
}