const { user } = require('../../../models')
const { verifyAccessToken } = require('../../../middlewares/token')
const { interestUpdate } = require('../../room/util')

module.exports = async (req, res) => {
    const userToken = verifyAccessToken(req);
    let { newcategory } = req.body

    if (!userToken) {
        res.status(403).send({
            message: 'ok'
        })
    } else {
        const userId = req.params.id;

        const userInterest = await user.findOne({
            where: { id: userId },
            raw: true
        })

        let target = [{ '코딩': 0 }, { '국내입시': 0 }, { '해외입시': 0 }, { '영어': 0 }, { '제2외국어': 0 },
        { '취업': 0 }, { '자격증': 0 }, { '공무원': 0 }, { '예체능': 0 }, { '자유': 0 }];

        let startInterest;
        if (userInterest.interest === null) {
            startInterest = interestUpdate(target, newcategory, 10)
        } else {
            let interest = JSON.parse(userInterest.interest)
            let secondNum = interest[1][Object.keys(interest[1])]
            // let filterCategory = req.body.newcategory.filter((el) => {
            //     for(let i = 0; i < 3; i++){
            //         if(Object.keys(userCategory.category[i]) !== el){
            //             return el
            //         }
            //     }
            // })
            let filtered = []
            let value = false
            newcategory.map((el) => {
                value = false
                for (let i = 0; i < 3; i++) {
                    if (`${Object.keys(interest[i])}` === el) {
                        value = true
                    }
                }
                if (value === false) {
                    filtered.push(el)
                }
            })
            let filterInterest = filtered
            startInterest = interestUpdate(interest, filterInterest, secondNum + 1)
        }
        await user
            .update({
                category: JSON.stringify(newcategory),
                interest: startInterest
            }, { where: { id: userId } })

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