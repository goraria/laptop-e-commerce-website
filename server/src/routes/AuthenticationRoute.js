const express = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');
const router = express.Router();

router.post('/login/authen', AuthenticationController.login.bind(AuthenticationController));

module.exports = router;

function AuthenticationRoute(config) {

}

export default AuthenticationRoute