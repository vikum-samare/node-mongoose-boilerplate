const { validate } = require("jsonschema")

const validateRequest = (req, schema, action, property = "body") => {
    if (req.is("application/json") && property === "body") {
        const result = validate(req[property], schema)
        if (result.valid) return action(req)
        else {
            logger.error("Received invalid JSON body.", {
                endpoint: req.path,
                method: req.method,
                body: req.body,
                errors: result.errors.map(e => `${e.property} ${e.message}`)
            })
            return BadRequest("Malformed JSON.")
        }
    }
    else if (property === "query") {
        const result = validate(req[property], schema)
        if (result.valid) return action(req)
        else {
            logger.error("Received invalid query parameters.", {
                endpoint: req.path,
                method: req.method,
                parameters: req.query,
                errors: result.errors.map(e => `${e.property} ${e.message}`)
            })
            return BadRequest("Malformed query parameters.")
        }
    }
    else return action(req)

}
    const send = (action, schema, property = "body") => (req, res) => {
        const response = schema ? validateRequest(req, schema, action, property) : action(req)
        if (Boolean(response.then)) response.then(resp => res.status(resp.status).json(resp)).catch(error => res.status(typeof error.status === "undefined" ? 500 : error.status).json(error))
        else res.status(response.status).json(response)
    }

    module.exports = {
        send
    }