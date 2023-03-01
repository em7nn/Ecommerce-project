import express from "express"
import { loginUser, registerUser } from "../controller/authController.js";

const AuthRoutes= express.Router();


AuthRoutes.post("/register", registerUser);


AuthRoutes.post("/login", loginUser);

export default AuthRoutes;