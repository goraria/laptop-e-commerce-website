const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationMiddleware = require('../middleware/AuthenticationMiddleware');
const AdministratorMiddleware = require('../middleware/AdministratorMiddleware');

// router.post('/login/authen', AuthenticationController.login.bind(AuthenticationController))
router.post('/login', AuthenticationController.login)

router.put('/register', AuthenticationController.register)

router.post('/logout', AuthenticationMiddleware, AuthenticationController.logout);

router.get('/check', AuthenticationMiddleware, AuthenticationController.check)

router.get('/verify-email', AuthenticationController.verifyEmail)

module.exports = router