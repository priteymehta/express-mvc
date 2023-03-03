const ProductModel = require('../models/product.model');

/** CONTROLLER METHODS */
//  REDIRECT ADD PRODUCT FORM
exports.addProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

// SAVE PRODUCT
exports.saveProduct = (req, res, next) => {
  console.log("req data ==>>>>", req.body); 
  // handle request body here with actual POST method
  const product = new ProductModel("New product");
  product.save();
  res.redirect('/');
};

// GET ALL PRODUCTS
exports.getProducts = (req, res, next) => {
  ProductModel.getAllProducts(products => {
    console.log("Products ==>>" , products);
    res.render('customer', {
      prods: products,
      pageTitle: 'Home',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
