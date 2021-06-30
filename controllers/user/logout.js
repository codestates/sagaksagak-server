module.exports = async (req, res) => {
    const { Authorization } = req.headers

    if(!Authorization) {
        res.status(404)
    }else{
        delete Authorization;
        res.cookie("refreshToken", '');
        res.status(205).send({
            message: "ok"
        })
    }
}