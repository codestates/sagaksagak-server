const { user } = require('../../models')

module.exports = async (req, res) => {
    const username = req.body.username;
    console.log('asdfasdfadf', username)
    const userInfo = await user.findOne({
        where: { username: username }
    })

    if (!userInfo) {
        res.status(200).send({
            message: 'username available'
        })
    } else {
        res.status(409).send({
            message: 'username exist'
        })
    }
}