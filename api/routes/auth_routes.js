import { Router } from "express";
import { loginController, regController } from "../controllers/auth_controller";

export const route = Router()

route.post('/login', loginController);
route.post('/register', regController);