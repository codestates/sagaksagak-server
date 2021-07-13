const { user } = require('../../models')
const { generateAccessToken, generateRefreshToken, sendAccessToken, sendRefreshToken } = require('../../middlewares/token');
module.exports = async (req, res) => {
    const { email, password } = req.body;
    
    let userInfo = await user.findOne({
        where: { email: email }
    })
    if (userInfo) {
        if (userInfo.comparePassword(password)) {
            userInfo = userInfo.dataValues
            delete userInfo.password;
            const accessToken = generateAccessToken(userInfo);
            const refreshToken = generateRefreshToken(userInfo);
            const username = userInfo.username
            const id = userInfo.id
    
            sendRefreshToken(res, refreshToken)
            sendAccessToken(res, accessToken, username, id);
            
        } else {
            res.status(401).send({
                message: 'wrong password'
            })
        }
    } else {
        res.status(404).send({
            message: 'email does not exist'
        })
    }
}