import express from "express"
import { deleteAccount, updateImage, updatePassword, updateUser } from "../controller/userController.js";

const UserRoutes = express.Router();

UserRoutes.put('/update', updateUser);

UserRoutes.put('/updatePassword', updatePassword);


UserRoutes.delete("/:id", deleteAccount);

UserRoutes.put('/update/:id', updateImage);

export default UserRoutes;