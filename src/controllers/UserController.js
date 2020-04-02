const { Ok, ServerError } = include("services/responses")
const { signToken } = include("utils/tokenManager")
const [User, UserRole] = include("models/mongooseSchemas/user")
const { saveUser } = include("services/clients/userApiClient")

class UserController {

    static verifyUser(req) {
        const { tokenBody } = req
        return Ok("Nice", tokenBody)

    }

    static userLogin(req) {
        console.log(req.tokenBody)
        return Ok("Nice", signToken({ userId: "pakaya" }))
    }
    static recordeUser(req) {
        const { email, password, fullName, contactNumber } = req.body
        try{
            const response = saveUser(req.body)
            return Ok("Kora", response)
        } catch (e) {
            return ServerError("Iwarai")
        }
        
    }

}
module.exports = UserController
