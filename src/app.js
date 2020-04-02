const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const routes = include("routes")

const { checkJwt } = include("controllers/middleware")

const app = express()
const port = 6000


// Todo: Connect mongo db
app.use("*/heartbeat", (req, res) => res.status(200).json({message: "I'm fine, Thank you.!"}))

app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
    // Todo Add middleware
    next()
})
//restricted routes check jwt
app.use("*/api/v1/user", checkJwt)


app.use("*/api/v1", routes)

app.use("*", (req, res) => res.status(404).json({message: "Not found, go away."}))

const server = app.listen(port, () => console.log(`Server started on port ${port}`))
server.setTimeout(100000)