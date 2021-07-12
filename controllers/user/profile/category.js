const { user } = require('../../../models')
const { verifyAccessToken } = require('../../../middlewares/token')
const { categoryUpdate } = require('../../room/util')

module.exports = async (req, res) => {
    const userToken = verifyAccessToken(req);
    if (!userToken) {
        res.status(403).send({
            message: 'ok'
        })
    } else {
        const userId = req.params.id;

        const userCategory = await user.findOne({
            where: {id: userId},
            raw: true
        })

        let target = [{'코딩': 0}, {'국내입시': 0}, {'해외입시': 0}, {'영어': 0}, {'제2외국어': 0},
        {'취업': 0}, {'자격증': 0}, {'공무원': 0}, {'예체능': 0}, {'자유': 0}];

        let startCategory;
        if(userCategory.category === null){
            startCategory = categoryUpdate(target, req.body.newcategory, 10)
        }else{
            let secondNum = userCategory.category[1][Object.keys(userCategory.category[1])]
            // let filterCategory = req.body.newcategory.filter((el) => {
            //     for(let i = 0; i < 3; i++){
            //         if(Object.keys(userCategory.category[i]) !== el){
            //             return el
            //         }
            //     }
            // })
            let filtered = []
            let value = false
            arr.map((el) => {
                value = false
                for (let i = 0; i < 3; i++) {
                    if (`${Object.keys(userCategory.category[i])}` === el) {
                        value = true
                    }
                }
                if (value === false) {
                    filtered.push(el)
                }
            })
            let filterCategory = filtered
            startCategory = categoryUpdate(userCategory.category, filterCategory, secondNum + 1)
        }
        await user
            .update({
                category: req.body.newcategory
            }, { where: {id: userId} })

            res.status(201).send({
                message: 'ok'
            })
    }
}
// function hoho(category1, arr) {

//     let filterCategory = arr.filter((el) => {
//         for (let i = 0; i < 3; i++) {
//             if (`${Object.keys(category1[i])}` !== el[Object.keys(cat)]) {
//                 return el
//             }
//         }
//     })
//     return filterCategory
// }
// function hoho7(category1, arr) {
//     let new1 = []
//     let value = false
//     arr.map((el) =>{
//         value = false
//         for (let i = 0; i < 3; i++) {
//             if (`${Object.keys(category1[i])}` === el) {
//                 value = true
//             }
//         }
//         if (value === false) {
//             new1.push(el)
//         }
//     })
//     return new1
// }