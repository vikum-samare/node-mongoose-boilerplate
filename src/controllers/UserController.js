const { Ok, ServerError } = include("services/responses")
const { signToken } = include("utils/tokenManager")
const { save, findAll } = include("services/clients/userApiClient")

class UserController {

    static verifyUser(req) {
        const { tokenBody } = req
        return Ok("Nice", tokenBody)
    }
    
    // Should validate login here
    static userLogin(req) {
        console.log(req.tokenBody)
        return Ok("Nice", signToken({ userId: "pakaya" }))
    }

    static recordeUser(req) {
        return save(req.body).then(data => {
            return Ok("Kora", data)
        }).catch(err => ServerError(err))
    }

    static findAllUsers(req) {
        return findAll().then(data => Ok("Kora", data)).catch(err => ServerError(err))
    }

}
module.exports = UserController
