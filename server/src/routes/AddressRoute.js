const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/AddressController');
const AuthenticationMiddleware = require('../middleware/AuthenticationMiddleware');

router.get('/list', AddressController.getAllAddresses);

router.get('/addresses/:idaddress', AddressController.getAddressById);

router.post('/addition', AddressController.createAddress);

router.put('/update/:idaddress', AddressController.updateAddress);

module.exports = router;
