const { user } = require('../../models')

module.exports = async (req, res) => {
    const user1 = req.params.username;
    let username = decodeURI(user1)

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