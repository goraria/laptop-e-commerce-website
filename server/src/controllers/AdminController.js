const express = require('express');
const app = express();
const db = require('../config/database.js')
const Account = require('../models/Account.js');
class AdminController {
    async getUser(req, res) {
        try {

            const account = await Account.findAll();
            res.status(200).json(account);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching account', error });
        }

    }

    async deleteUser(req, res, idaccount) {
        try {
            const account = await Account.findByPk(idaccount);
            // Xóa người dùng
            await account.destroy();
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ success: false, message: 'Error deleting user', error });
        }
    }
    async updateUser(req, res, idaccount) {
        try {
            const account = await Account.findByPk(idaccount);

            await account.update(updatedData);
            res.status(200).json({ success: true, message: 'User updated successfully', data: updatedData });
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ success: false, message: 'Error updating user' });
        }
    }

}
module.exports = new AdminController();    
