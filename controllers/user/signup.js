const { user } = require('../../models');
const { generateAccessToken, generateRefreshToken, sendRefreshToken, sendAccessToken } = require('../../middlewares/token');

module.exports = async (req, res) => {
    const { email, username, password } = req.body;
    console.log('#####################',username)
    const nameInfo = await user.findOne({
        where: { username: username }
    })
    const emailInfo = await user.findOne({
        where: { email: email }
    })
    if (!emailInfo && !nameInfo) {
        // data = JSON.stringify(category) 카테고리가 객체면 주석풀고 16줄 변경
        const userInfo = await user.create({
            email: email,
            username: username,
            password: password
        })
        
        delete userInfo.dataValues.password;
        const accessToken = generateAccessToken(userInfo.dataValues);
        const refreshToken = generateRefreshToken(userInfo.dataValues);
        const { name, id } = userInfo.dataValues

        sendRefreshToken(res, refreshToken)
        res.status(201).send({
            message: 'ok',
            username: name,
            userId: id,
            accessToken
        })
    } else if (emailInfo) {
        res.status(409).send({
            message: 'email exist'
        })
    } else if (nameInfo) {
        res.status(409).send({
            message: 'username exist'
        })
    }
}