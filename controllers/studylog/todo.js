const { todo } = require('../../models')
const { verifyAccessToken } = require('../../middlewares/token')
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    const userToken = verifyAccessToken(req);

    function getToday() {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    }

    const today = String(getToday()) 

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

        const todaytodo = await todo.findAll({
            where: {
                [Op.and]: [
                    { createdAt: { [Op.between]: [today, Date.parse(new Date())] } },
                    { isDone: false, userId: userToken.id }            
                ]
            },
            order: [["updatedAt", "DESC"]]
        })

        const todayList = await todaytodo.map(el => {
            return {
                id: el.id,
                content: el.content,
                updatedAt: el.updatedAt
            }
        })

        res.status(200).send({
            doneList,
            todoList,
            todayList
        })
     
    }else{
        res.status(403).send({
            message: "access token expired"
        })
    }
}