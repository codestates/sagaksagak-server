const { todo } = require('../../models')
const { verifyAccessToken } = require('../../middlewares/token')
const { Op } = require("sequelize");

module.exports = async (req, res) => {

    const userToken = await verifyAccessToken(req);
    const today = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`

    if (userToken !== null) {
        const users = await todo.findAll({
            where: {
                userId: userToken.id,
            },
            order: [["updatedAt", "DESC"]],
            raw: true
        })

        let doneList = await users.filter(el => {
            if(el.isDone){
                let date = el.updatedAt
                date.setMinutes( date.getMinutes() + 540 );
                return {
                    id: el.id,
                    content: el.content,
                    updatedAt: date
                }
            }
        })
        // doneList = await doneList.filter(el => el !== undefined)

        let todoList = await users.filter(el => {
            if(!el.isDone){
                let date = el.createdAt
                date.setMinutes( date.getMinutes() + 540 );
                return {
                    id: el.id,
                    content: el.content,
                    createdAt: date
                }
            }
        })
        // todoList = await todoList.filter(el => el !== undefined)
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