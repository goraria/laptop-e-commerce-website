const express = require('express');
const app = express();
const db = require('../config/database.js')
const Account = require('../models/Account.js');
const User = require('../models/User.js');
const { where } = require('sequelize');
class AdminController {
    async getAccount(req, res) {
        try {

            const account = await Account.findAll();
            res.status(200).json(account);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching account', error });
        }

    }
    async getUser(req, res) {
        try {

            const user = await User.findAll();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching account', error });
        }

    }
    async getAccountId(req, res) {
        try {
            const { idaccount } = req.params.idaccount
            const account = await Account.findAll({
                where: {
                    idaccount: idaccount
                }
            });
            res.status(200).json(account);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching account', error });
        }

    }
    async getUserId(req, res) {
        try {
            const { idaccount } = req.params.idaccount
            const user = await User.findAll({
                where: {
                    idaccount: idaccount
                }
            });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching account', error });
        }

    }
    async deleteUser(req, res) {
        try {
            const { idaccount } = req.params.idaccount
            const account = await Account.findAll({
                where: {
                    idaccount: idaccount
                }
            });
            const user = await User.findAll({
                where: {
                    idaccount: idaccount
                }
            });
            // Xóa người dùng
            await account.destroy();
            await user.destroy();

            res.status(200).json({ success: true, message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ success: false, message: 'Error deleting user', error });
        }
    }
    async updateAccount(req, res) {
        try {
            const { idaccount } = req.params.idaccount
            const account = await Account.findAll({
                where: {
                    idaccount: idaccount
                }
            });
            if (account.length > 0) {
                await account.update(updatedData);
                res.status(200).json({ success: true, message: 'User updated successfully', data: updatedData });
            }
            else {
                res.status(404).json({ message: `No user found with id ${idaccount}` });
            }
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ success: false, message: 'Error updating user' });
        }
    }
    async updateUser(req, res) {
        try {
            const { idaccount } = req.params.idaccount
            const user = await User.findAll({
                where: {
                    idaccount: idaccount
                }
            });
            if (user.length > 0) {
                await user.update(updatedData);
                res.status(200).json({ success: true, message: 'User updated successfully', data: updatedData });
            }
            else {
                res.status(404).json({ message: `No user found with id ${idaccount}` });
            }
            res.status(200).json({ success: true, message: 'User updated successfully', data: updatedData });
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ success: false, message: 'Error updating user' });
        }
    }
}
module.exports = new AdminController();    
