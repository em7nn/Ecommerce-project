import express from "express"
import { createProduct, getAllProduct, getProduct } from "../controller/productController.js";
import verifyTokenAdmin from "../verifyToken.js";


const  ProductRoutes = express.Router();


ProductRoutes.post("/add", verifyTokenAdmin, createProduct);

ProductRoutes.get("/all", getAllProduct);

ProductRoutes.get("/:id", getProduct);

export default ProductRoutes;