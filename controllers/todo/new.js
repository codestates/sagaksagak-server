const { todo } = require('../../models');
const { verifyAccessToken } = require('../../middlewares/token');

module.exports = async (req, res) => {
    const accessToken = verifyAccessToken(req);

    if(accessToken === null){
        res.status(403).send({
            message: 'access token expired'
        })
    }else{
        const { contents } = req.body;
        const todos = await todo.create({
            content: contents,
            userId: accessToken.id,
        })
        res.status(201).send({
            message: "ok",
            id: todos.dataValues.id,
        })
    }
}