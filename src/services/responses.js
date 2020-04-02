const response = (status, message, data) => {
    const resp = {
        status,
        message
    }
    return data ? { ...resp, data } : resp
}

const Ok = (message, data) => response(200, message, data)
const BadRequest = (message) => response(400, message)
const Unauthorised = (message) => response(401, message)
const NotFound = (message) => response(404, message)
const ServerError = (message) => response(500, message)
const HttpError = (status = 500, message, data = false) => response(status, message, data)

module.exports = {
    BadRequest,
    Ok,
    NotFound,
    ServerError,
    Unauthorised,
    HttpError
}