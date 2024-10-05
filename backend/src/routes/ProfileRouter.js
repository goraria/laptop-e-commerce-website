const express = require('express');
const router = express.Router();
const profileController = require('../controllers/ProfileController');

// Route để lấy tất cả người dùng
router.get('/:idaccount', profileController.getProfile);
module.exports = router;
