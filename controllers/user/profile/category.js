const { user } = require('../../../models')
const { verifyAccessToken } = require('../../../middlewares/token')

module.exports = async (req, res) => {
    const userToken = verifyAccessToken(req);

    if (!userToken) {
        res.status(403).send({
            message: 'ok'
        })
    } else {
        const userId = req.params.id;
        await user
            .update({
                category: req.body.newcategory
            }, { where: {id: userId} })
            res.status(201).send({
                message: 'ok'
            })
    }
}