const asyncHandler = require('express-async-handler');
const Order = require('../models/oderModel');

const addOrderItem = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400).json({
            message: "No order selected !!"
        });
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress
        });

        const createdOrder = await order.save(); // Corrected: calling save() on the order instance

        res.status(201).json(createdOrder);
    }
});

// @desc Get Order by ID
// @route GET /api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
    const order  = await Order.findbyId(req.params.id).populate('user', 'name email');
    
    if(order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error("order not found!!")
    }
})

//@desc Get all orders
//@route GET /api/v1/orders
//@access Private/Admin


const getAllOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({}).populate('user','id name')
    res.json(orders);
})

//@desc Get oders of logged in user
//@route GET api/orders/myorders
//@access Private/

const getuserOrders = asyncHandler( async (req, res) => {
    
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
    
})



module.exports = {
    addOrderItem,
    getOrderById,
    getAllOrders,
    getuserOrders 
};
