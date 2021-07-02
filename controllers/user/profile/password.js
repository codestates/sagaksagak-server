const { user } = require('../../../models');
const { verifyAccessToken } = require('../../../middlewares/token');

module.exports = async (req, res) => {
    const userToken = await verifyAccessToken(req);
   
    if(userToken === null){
        res.status(403).send({
            message: "access token expired"
        })
    }else{
        const users = await user.findOne({
            where: {
                email: userToken.email,
                password: req.body.currentpassword
            },
            raw: true
        })
        if(!users){
            res.status(401).send({
                message: "wrong password"
            })
        }else{
            await user
                .update(
                    {
                        password: req.body.newpassword
                    },
                    { where: { email: user.email } }
                )
                res.status(205).send({
                    message: "ok"
                })
        }
    }
}