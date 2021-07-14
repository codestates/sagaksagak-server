const { verifyRefreshToken, generateAccessToken, sendAccessToken } = require('../../middlewares/token');
const { user } = require('../../models')

module.exports = async (req, res) => {
    const refreshToken = verifyRefreshToken(req);

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
            const { relogin } = req.headers;
            delete userInfo.password
            const accessToken = generateAccessToken(userInfo);
            if (relogin) {
                const { username, id, email, category } = userInfo
                sendAccessToken(res, accessToken, username, id, email, category);
            } else {
                sendAccessToken(res, accessToken);
            }
        }
    }
}