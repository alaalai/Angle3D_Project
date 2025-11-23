const express = require('express');
const router = express.Router();
const { Order } = require('../models');

// Create a new order
router.post('/', async (req, res) => {
    try {
        const { productId, selectedOptions, totalPrice, previewImage, customerEmail } = req.body;

        const order = new Order({
            productId,
            selectedOptions,
            totalPrice,
            previewImage,
            customerEmail
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all orders (Admin)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('productId').sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
