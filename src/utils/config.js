/* eslint-disable no-process-env */

const fs = require("fs")
const path = require("path")
const nodeEvars = {
    DEPLOYMENT_ENV: process.env.DEPLOYMENT_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRE: process.env.JWT_EXPIRE
}

const fileEvars = fs.existsSync(path.join(".", "evars.json")) ? JSON.parse(fs.readFileSync("./evars.json")) : {}
const config = {
    ...nodeEvars,
    ...fileEvars
}

module.exports = config
