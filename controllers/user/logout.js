module.exports = async (req, res) => {
    const { authorization } = req.headers

    if (!authorization) {
        res.status(403).send()
    } else{
        delete authorization;
        res.cookie("refreshToken", '', {
            domain: 'sagaksagak.site',
            maxAge: 0,
            secure: true
        });
        res.status(205).send({
            message: "ok"
        })
    }
}