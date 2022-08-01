const express = require("express")

const {resetController, loginController, registerController} = require('../controllers/auth.controllers')

const authRouter = express.Router();

authRouter.post('/login', loginController)
authRouter.post('/register', registerController)
authRouter.post('/reset', resetController)

module.exports = authRouter