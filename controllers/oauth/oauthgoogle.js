const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();
const client = new OAuth2Client(process.env.CLIENT_ID);
const { user } = require('../../models');
const { generateAccessToken, generateRefreshToken, sendAccessToken,sendRefreshToken } =require('../../middlewares/token')

module.exports = async (req, res) => {
    const { tokenId }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();    
    console.log('33333', picture)
    const userInfo = await user.findOne({
        where: { email: email },
        raw: true
    })

    if(!userInfo){
        const users = await user.create({
            email: email,
            username: name,
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
    }else if(userInfo){
        delete userInfo.password;
        const accessToken = generateAccessToken(userInfo)
        const refreshToken = generateRefreshToken(userInfo)
        
        sendRefreshToken(res, refreshToken)
        sendAccessToken(res, accessToken, userInfo.username, userInfo.id)
    }
    

    res.status(201)
    res.json(user)
}

    