const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationMiddleware = require('../middleware/AuthenticationMiddleware');
const AdministratorMiddleware = require('../middleware/AdministratorMiddleware');

// router.post('/login/authen', AuthenticationController.login.bind(AuthenticationController))
router.post('/login', AuthenticationController.login)
router.post('/register', AuthenticationController.register)

router.post('/logout', AuthenticationMiddleware, AuthenticationController.logout);

router.get('/profile', AuthenticationMiddleware, (req, res) => {
    return res.json({ message: 'User profile', user: req.user });
});

router.get('/admin', AuthenticationMiddleware, AdministratorMiddleware, (req, res) => {
    return res.json({ message: 'Welcome Admin', user: req.user });
});

router.post('/check', AuthenticationController.register)

module.exports = router