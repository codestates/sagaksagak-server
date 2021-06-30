const { user } = require('../../models');

module.exports = async (req, res) => {
    const { email, username, password, category } = req.body;
    const nameInfo = await user.findOne({
        where: { username: username }
    })
    const emailInfo = await user.findOne({
        where: { email: email }
    })
    if (!emailInfo && !nameInfo) {
        // data = JSON.stringify(category) 카테고리가 객체면 주석풀고 16줄 변경
        await user.create({
            email,
            username,
            category,
            password
        })
        res.status(201).send({
            message: 'ok'
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