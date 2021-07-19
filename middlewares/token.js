const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    generateAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: `${1000 * 60 * 60 * 24 * 14}s` })
    },
    generateRefreshToken: (data) => {
        return sign(data, process.env.REFRESH_SECRET, { expiresIn: '30d' })
    },
    sendAccessToken: (res, accessToken, username, userId, email, category, subId) => {
        res.status(200).send({
            accessToken,
            username,
            userId,
            email,
            category,
            subId
        });
    },
    sendRefreshToken: (res, refreshToken) => {
        res.cookie("refreshToken", refreshToken, {
            domain: 'sagaksagak.site',
            maxAge: `${1000 * 60 * 60 * 24 * 30}`,
            secure: true
        });
    },
    verifyAccessToken: (req) => {
        const authorization = req.headers["authorization"];
        if (!authorization) {
            return null;
        }
        const token = authorization.split(" ")[1];
        try {
            return verify(token, process.env.ACCESS_SECRET);
        } catch (err) {
            return null;
        }
    },
    verifyRefreshToken: (req) => {
        const refreshToken = req.cookies.refreshToken;
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET);
        } catch (err) {
            return null;
        }
    },
}