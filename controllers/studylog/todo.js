const { todo } = require('../../models')
const { verifyAccessToken } = require('../../middlewares/token')
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    const userToken = verifyAccessToken(req);

    if (userToken !== null) {
        const users = await todo.findAll({
            where: {
                userId: userToken.id,
            },
            order: [["updatedAt", "DESC"]],
            raw: true
        })

        const doneList = await users.map(el => {
            if(el.isDone){
                return {
                    id: el.id,
                    content: el.content,
                    updatedAt: el.updatedAt
                }
            }
        })

        const todoList = await users.map(el => {
            if(!el.isDone){
                return {
                    id: el.id,
                    content: el.content,
                    createdAt: el.createdAt
                }
            }
        })

        res.status(200).send({
            doneList,
            todoList
        })
     
    }else{
        res.status(403).send({
            message: "access token expired"
        })
    }
}