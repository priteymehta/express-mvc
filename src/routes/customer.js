const path = require('path');
const express = require('express');
const productController = require('../controllers/products.controller');
const router = express.Router();

/** METHODS */
// get list of products
router.get('/', productController.getProducts);

module.exports = router;
