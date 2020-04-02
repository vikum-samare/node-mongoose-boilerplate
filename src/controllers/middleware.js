const { verifyToken } = include("utils/tokenManager")
const { Unauthorised } = include("services/responses")

// Bearer token
// Bearer <<token>>
const checkJwt = (req, res, next) => {
    const { authorization } = req.headers
    if (typeof authorization !== "undefined") {

        const [, token] = authorization.split(" ")
        verifyToken(token)
            .then(body => {
                req.tokenBody = body
                next()
            })
            .catch(err => {
                res.status(401);
                res.send(Unauthorised("Invalid Token"))
            })

    } else {
        res.status(401);
        res.send(Unauthorised("Unauthorized!"))
    }
}

module.exports = {
    checkJwt
}
