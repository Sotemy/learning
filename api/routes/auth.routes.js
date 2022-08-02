const express = require("express")

const {resetController, loginController, registerController} = require('../controllers/auth.controllers');
const {useAuth} = require("../middlewares/useAuth");

const authRouter = express.Router();

authRouter.post('/login', loginController)
authRouter.post('/register', registerController)
authRouter.post('/reset', useAuth, resetController)

module.exports = authRouter