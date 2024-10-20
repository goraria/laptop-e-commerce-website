const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Route để lấy tất cả người dùng
router.get('/load-product', productController.loadProduct);
router.get('/load-product/:idProduct', productController.loadProductWithID);
router.get('/load-description/:idProduct', productController.loadDescription);
router.get('/load-configuration/:idProduct', productController.loadConfiguration);
router.get('/load-rating/:idProduct', productController.loadRating);



module.exports = router;