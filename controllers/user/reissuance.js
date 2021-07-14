const { verifyRefreshToken, generateAccessToken, sendAccessToken } = require('../../middlewares/token');
const { user } = require('../../models')

module.exports = async (req, res) => {
    const refreshToken = verifyRefreshToken(req);
    const { relogin } = req.headers;

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
            if (relogin) {
                const { username, id, email, category, subId } = userInfo
                sendAccessToken(res, accessToken, username, id, email, JSON.parse(category), subId);
            } else {
                sendAccessToken(res, accessToken);
            }
        }
    }
}