const path = require('path');
const express = require('express');
const productController = require('../controllers/products.controller');
const router = express.Router();

/** METHODS */
// render path for add product form
router.get('/add-product', productController.addProduct);

// save product details
router.post('/add-product', productController.saveProduct);

module.exports = router;
