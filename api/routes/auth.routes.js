const express = require("express")

const {resetController, loginController, registerController, check} = require('../controllers/auth.controllers');
const {useAuth} = require("../middlewares/useAuth");

const authRouter = express.Router();

authRouter.post('/login', loginController)
authRouter.post('/register', registerController)
authRouter.post('/reset', useAuth, resetController)
authRouter.get('/check_key', useAuth, check)

module.exports = authRouter