const express = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');
// const router = express.Router();

// router.post('/login/authen', AuthenticationController.login.bind(AuthenticationController));

const router = express.Router();

router.post('/login', AuthenticationController.login)
router.post('/register', AuthenticationController.register)

module.exports = router