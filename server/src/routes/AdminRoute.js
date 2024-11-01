const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const ProductController = require('../controllers/ProductController');

router.get('/get-user', AdminController.getUser);
router.get('/get-account', AdminController.getAccount);
router.get('/get-userid/:idaccount', AdminController.getUserId);
router.get('/get-accountid/:idaccount', AdminController.getAccountId);
router.post('/update-user/:idaccount', AdminController.updateUser);
router.post('/update-account/:idaccount', AdminController.updateAccount);
router.post('/detele-user/:idaccount', AdminController.deleteUser);

router.get('/get-category', AdminController.getCategory);
module.exports = router;