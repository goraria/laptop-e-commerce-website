const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

router.get('/get-user', AdminController.getUser);
router.post('/update-user', (req, res) => {
    const idaccount = req.query.idaccount;
    AdminController.updateUser(req, res, idaccount)
});
router.post('/detele-user', (req, res) => {
    const idaccount = req.query.idaccount;
    AdminController.deleteUser(req, res, idaccount)
});
module.exports = router;