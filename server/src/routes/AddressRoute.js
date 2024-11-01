const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/AddressController');
const AuthenticationMiddleware = require('../middleware/AuthenticationMiddleware');

router.get('/list', AuthenticationMiddleware, AddressController.getAllAddresses);

router.get('/addresses/:idaddress', AddressController.getAddressById);

router.put('/addition', AuthenticationMiddleware, AddressController.createAddress);

router.post('/update/:idaddress', AuthenticationMiddleware, AddressController.updateAddress);

router.delete('/delete/:idaddress', AuthenticationMiddleware, AddressController.deleteAddress);

module.exports = router;
