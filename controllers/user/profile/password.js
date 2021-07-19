const { user } = require('../../../models');

module.exports = async (req, res) => {
    // const userToken = await verifyAccessToken(req);
    const { currentpassword, newpassword } = req.body
    const { id } = req.params
    if (!id) {
        res.status(400).send({
            message: 'bad request'
        })
    } else {
        const users = await user.findOne({
            where: { id }
        })
        if (!users.comparePassword(currentpassword)) {
            res.status(401).send({
                message: "wrong password"
            })
        } else {
            let password = users.changePassword(newpassword);
            await user.update({
                password
            }, { where: { id } })
            res.status(205).send({
                message: "ok"
            })
        }
    }
}