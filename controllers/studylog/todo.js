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
        const users = await todo.findOne({
            where: {
                userId: userToken.id,
            },
            raw: true
        })
        if (users.isDone) {
            res.status(200).send({
                donelist: [{
                    id: users.userId,
                    content: users.content,
                    updatedAt: users.updatedAt
                }]
            })
        }else{
            const todayList = await users.findAll({
                where: { createdAt: { [Op.between]: [today, Date.parse(new Date())] } },
            })
            if(todayList){
                // res.status(200).send({
                //     todayList: [{
                //         id: users.userId,
                //         content: users.content,
                //         updatedAt: users.updatedAt
                //     }]
                // })
            }else{
                // res.status(200).send({
                //     todoList: [{
                //         id: users.userId,
                //         content: users.content,
                //         createdAt: users.createdAt
                //     }]
                // })
            }
        }
    }else{
        res.status(403).send({
            message: "access token expired"
        })
    }
}