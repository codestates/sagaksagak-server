const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();
const client = new OAuth2Client(process.env.CLIENT_ID);
const { user } = require('../../models');
const { generateAccessToken, generateRefreshToken, sendAccessToken,sendRefreshToken } =require('../../middlewares/token')

module.exports = async (req, res) => {
    const { tokenId, subId }  = req.body
    
    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID
    });
    
    const { name, email, sub } = ticket.getPayload();  

    console.log('33333', ticket.getPayload())
    const userInfo = await user.findOne({
        where: { email: email },
        raw: true
    })


    if(!subId){
        if(userInfo){
            res.status(409).send({
                message: 'user already exist'
            })
        }else{

            const users = await user.create({
                email: email,
                username: name,
                subId: sub
            })
    
            delete users.dataValues.password;
            const accessToken = generateAccessToken(users.dataValues);
            const refreshToken = generateRefreshToken(users.dataValues);
    
            sendRefreshToken(res, refreshToken);
    
            res.status(201).send({
                userId: users.dataValues.id,
                username: users.dataValues.username, 
                accessToken
            })
        }
    }else{
        if(userInfo && subId === userInfo.subId){
            delete userInfo.password;
            const accessToken = generateAccessToken(userInfo)
            const refreshToken = generateRefreshToken(userInfo)
            
            sendRefreshToken(res, refreshToken)
            sendAccessToken(res, accessToken, userInfo.username, userInfo.id)

        }else{
            res.status(404).send('go to sign up')
        }
    }
    
}

    