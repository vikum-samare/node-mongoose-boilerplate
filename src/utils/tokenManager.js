const jwt = require("jsonwebtoken")
const conf = include("utils/config")
const { JWT_SECRET, JWT_EXPIRE } = conf

 const signToken = (data) => jwt.sign({
    ...data
}, JWT_SECRET, { expiresIn: JWT_EXPIRE })

const verifyToken = (token) => new Promise((resolve, reject) =>
    jwt.verify(token, JWT_SECRET, (err, authData) => {
                if(err){
                    reject(err)
                } else {
                    resolve(authData)
                }
            }))

module.exports = {
    signToken,
    verifyToken
}
