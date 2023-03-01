import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    star: { type: Number, required: true },
    image: { type: String, required: true },
    imageOne: { type: String, required: true },
}, {
    timestamps: true
});


const Product = mongoose.model("Products", ProductSchema);


export default Product;