
const express = require('express');
     const mongoose = require('mongoose');
     const bodyParser = require('body-parser');

     const app = express();
     app.use(bodyParser.json());

     // Connect to MongoDB
     mongoose.connect('mongodb://localhost:27017/flipkart-clone', { useNewUrlParser: true, useUnifiedTopology: true });

     // Sample Product Schema
     const productSchema = new mongoose.Schema({
         name: String,
         price: Number,
         description: String,
         imageUrl: String,
     });

     const Product = mongoose.model('Product', productSchema);

     // API to get products
     app.get('/api/products', async (req, res) => {
         const products = await Product.find();
         res.json(products);
     });

     // Start the server
     const PORT = process.env.PORT || 5000;
     app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
     });