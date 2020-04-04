const express = require("express")
const router = express.Router()

const { send } = include("controllers/controller")

// Controllers
const UserController = include("controllers/UserController")


//  ** Route pattern
//  /<<module>>/path
//  ex: /sms-api/send-sms
// router.get("/pakaya", send(UserController.testMethod))

router.post("/login", send(UserController.userLogin))

router.post("/user/view", send(UserController.verifyUser))

router.post("/user/save", send(UserController.recordeUser))

router.get("/user/find-all", send(UserController.findAllUsers))



module.exports = router
