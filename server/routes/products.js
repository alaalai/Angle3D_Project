const express = require('express');
const router = express.Router();
const { Product, Option, Model3D } = require('../models');

// Create a new product
router.post('/', async (req, res) => {
    try {
        const { title, description, modelId, basePrice, images } = req.body;

        const product = new Product({
            title,
            description,
            modelId,
            basePrice,
            images
        });

        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate('modelId');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single product with options
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate('modelId')
            .populate('options');

        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add an option to a product
router.post('/:id/options', async (req, res) => {
    try {
        const { partName, type, value, priceChange, thumbnail } = req.body;
        const product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({ message: 'Product not found' });

        const newOption = new Option({
            modelId: product.modelId,
            partName,
            type,
            value,
            priceChange,
            thumbnail
        });

        await newOption.save();

        product.options.push(newOption._id);
        await product.save();

        res.status(201).json(newOption);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
