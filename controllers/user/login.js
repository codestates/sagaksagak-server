const { user } = require('../../models')
const { generateAccessToken, generateRefreshToken, sendAccessToken, sendRefreshToken } = require('../../middlewares/token');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await user.findOne({
        where: { email: email }, raw: true
    })
    let dbpass;
    if (userInfo) {
        dbpass = userInfo.password;
        if (dbpass === password) { // 비크립트 도입시 컴패어로 바꿔줄것
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