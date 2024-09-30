const express = require('express');
const router = express.Router();
const listProductController = require('../controllers/ListProductController');

// Route để lấy tất cả người dùng
router.get('/getAllProduct', listProductController.getAllProduct);

module.exports = router;
