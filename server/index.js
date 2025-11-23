const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const modelRoutes = require('./routes/models');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/models', modelRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/angle3d_clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('Angle3D Clone API is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
