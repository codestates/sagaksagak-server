module.exports = async (req, res) => {
    const { authorization } = req.headers

    if(!authorization) {
        res.status(403).send()
    }else{
        delete authorization;
        res.cookie("refreshToken", '');
        res.status(205).send({
            message: "ok"
        })
    }
}