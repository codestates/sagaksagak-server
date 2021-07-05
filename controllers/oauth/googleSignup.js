const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();
const client = new OAuth2Client(process.env.CLIENT_ID);
const { user } = require('../../models');
const { generateAccessToken, generateRefreshToken, sendRefreshToken } =require('../../middlewares/token')

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

    if (userInfo) {
        res.status(409).send({
            message: 'user already exist'
        })
    } else {
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
            accessToken,
            subId: users.dataValues.subId
        })
    }

}

    