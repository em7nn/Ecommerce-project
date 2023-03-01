import express from "express"
import { getMyOrder, getUserOrders, order } from "../controller/orderController.js";

const OrderRoutes = express.Router();


OrderRoutes.post("/add", order);


OrderRoutes.get("/find/:userId", getUserOrders);

OrderRoutes.get("/:id", getMyOrder)

export default OrderRoutes;