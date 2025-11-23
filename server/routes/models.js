const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { Model3D } = require('../models');

// Configure Multer for local storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Upload a new 3D model
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { name, parts } = req.body;
        const parsedParts = parts ? JSON.parse(parts) : [];

        const newModel = new Model3D({
            name,
            fileUrl: `/uploads/${req.file.filename}`,
            parts: parsedParts
        });

        await newModel.save();
        res.status(201).json(newModel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// List all models
router.get('/', async (req, res) => {
    try {
        const models = await Model3D.find();
        res.json(models);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
