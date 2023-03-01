import Product from "../model/productModel.js";


export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);

    try {

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllProduct = async (req, res) => {
    const products = await Product.find();

    res.send(products);
}

export const getProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id});
    if(product) {
        res.send(product);
    } else {
        res.status(404).json("Product not found!");
    }
    
}