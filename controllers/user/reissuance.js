const { verifyrefreshToken, generateAccessToken, sendAccessToken } = require('../../middlewares/token');
const { user } = require('../../models')

module.exports = async (req, res) => {
    const refreshToken = verifyrefreshToken(req);
    
    if (refreshToken === null) {
        res.status(403).send({
            message: 'refresh token expired'
        })
    } else {
        const userEmail = refreshToken.email;
        const userInfo = await user.findOne({
            where: { email: userEmail }, raw: true
        })
        if (!userInfo) {
            res.status(404).send({
                message: 'not found'
            })
        } else {
            delete userInfo.password
            const accessToken = generateAccessToken(userInfo);

            sendAccessToken(res, accessToken);
        }
    }
}