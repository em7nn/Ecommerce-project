import Order from "../model/orderModel.js"


export const order = async (req,res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}


export const getUserOrders = async(req,res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
} 


export const getMyOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: "Order Not Found"});
    }
}