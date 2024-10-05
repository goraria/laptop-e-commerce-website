const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Route để lấy tất cả người dùng
router.post('/load-product', productController.loadProduct);
module.exports = router;
