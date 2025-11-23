const mongoose = require('mongoose');

const Model3DSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fileUrl: { type: String, required: true },
    parts: [{ type: String }] // Array of mesh names in the 3D model
}, { timestamps: true });

const OptionSchema = new mongoose.Schema({
    modelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Model3D', required: true },
    partName: { type: String, required: true },
    type: { type: String, enum: ['color', 'texture', 'toggle', 'swap'], required: true },
    value: { type: String, required: true }, // Hex code, texture URL, or boolean string
    priceChange: { type: Number, default: 0 },
    thumbnail: { type: String } // Optional preview for the option
}, { timestamps: true });

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],
    modelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Model3D', required: true },
    basePrice: { type: Number, required: true },
    options: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }] // Pre-linked options available for this product
}, { timestamps: true });

const OrderSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    selectedOptions: [{
        partName: String,
        optionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Option' },
        value: String,
        price: Number
    }],
    totalPrice: { type: Number, required: true },
    previewImage: { type: String }, // Snapshot URL
    exportedPdfUrl: { type: String },
    status: { type: String, default: 'pending' },
    customerEmail: { type: String }
}, { timestamps: true });

module.exports = {
    Model3D: mongoose.model('Model3D', Model3DSchema),
    Option: mongoose.model('Option', OptionSchema),
    Product: mongoose.model('Product', ProductSchema),
    Order: mongoose.model('Order', OrderSchema)
};
