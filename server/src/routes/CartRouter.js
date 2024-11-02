const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');
const AuthenticationMiddleware = require('../middleware/AuthenticationMiddleware');


// Route để lấy tất cả người dùng
// router.get('/load-cart', cartController.loadCart);
// router.get('/load-cart/:idCart', cartController.loadCartById);
router.get('/load-cartItem/:idCart', cartController.loadCartItem);
router.get('/loadcart', AuthenticationMiddleware , cartController.LoadCart);
router.put('/add-cartitem', cartController.addCartItem);





module.exports = router;