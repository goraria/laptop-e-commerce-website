const express = require('express');
const app = express();
const db = require('../config/database.js')
const Account = require('../models/Account.js');
const User = require('../models/User.js');
const { where } = require('sequelize');
const Category = require("../models/Category.js");
const Product = require('../models/Product.js');
const Configuration = require('../models/Configuration.js')
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
            const { idaccount } = req.params
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
            const { idaccount } = req.params
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
            const { idaccount } = req.params
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
            const { idaccount } = req.params
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
            const { idaccount } = req.params
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
    async getCategory(req, res) {
        try {

            const category = await Category.findAll();
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching category', error });
        }

    }
    async deleteCategory(req, res) {
        try {
            const { idCategory } = req.params
            console.log(idCategory)
            const category = await Category.findOne({
                where: {
                    idCategory: idCategory
                }
            });
            // Xóa người dùng
            await category.destroy();
            res.status(200).json({ success: true, message: 'Category deleted successfully' });
        } catch (error) {
            console.error('Error deleting Category:', error);
            res.status(500).json({ success: false, message: 'Error deleting Category', error });
        }
    }
    async updateCategory(req, res) {
        const { idCategory } = req.params;
        console.log(idCategory);

        if (!idCategory) {
            return res.status(400).json({ message: 'Category ID is required' });
        }

        const updatedData = req.body; // Dữ liệu cập nhật
        console.log(updatedData)

        if (!updatedData || Object.keys(updatedData).length === 0) {
            return res.status(400).json({ message: 'No update data provided' });
        }

        try {
            const category = await Category.findOne({
                where: { idcategory: idCategory },
            });

            if (!category) {
                return res.status(404).json({ message: `No category found with id ${idCategory}` });
            }

            await category.update(updatedData); // Cập nhật dữ liệu từ client

            res.status(200).json({ success: true, message: 'Category updated successfully', data: category });

        } catch (error) {
            console.error('Error updating category:', error);
            res.status(500).json({ success: false, message: 'Error updating category', error });
        }
    }
    async createCategory(req, res) {
        const Data = req.body; // Giả sử dữ liệu cập nhật được gửi từ client trong body
        console.log(Data)
        try {

            const newCategory = await Category.create({
                category_name: Data.category_name,
            });

            console.log('Product created successfully:', newCategory);
            return res.status(201).json({
                category: newCategory,
            });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error create user', error });
        }
    }
    async updateUserData(req, res) {
        const { idaccount } = req.params;
        console.log(idaccount)
        const updatedData = req.body; // Giả sử dữ liệu cập nhật được gửi từ client trong body

        // const t = await db.sequelize.transaction(); // Bắt đầu transaction

        try {
            // Cập nhật bảng Account
            const account = await Account.findOne({
                where: { idaccount: idaccount },
                // transaction: t,
            });

            if (!account) {
                return res.status(404).json({ message: `No account found with id ${idaccount}` });
            }

            await account.update({ email: updatedData.email });

            // Cập nhật bảng User
            const user = await User.findOne({
                where: { idaccount: idaccount },
                // transaction: t,
            });

            if (!user) {
                return res.status(404).json({ message: `No user found with id ${idaccount}` });
            }

            await user.update({
                firstname: updatedData.firstname,
                lastname: updatedData.lastname,
                phone_number: updatedData.phone_number,
                username: updatedData.username
            });

            // await t.commit(); // Cam kết transaction
            res.status(200).json({ success: true, message: 'User updated successfully', data: updatedData });

        } catch (error) {
            await t.rollback(); // Hoàn tác nếu có lỗi
            console.error('Error updating user:', error);
            res.status(500).json({ success: false, message: 'Error updating user', error });
        }
    }
    async createdejaptor(req, res) {
        const a = req.body
        try {
            const category = await Category.findOne({
                where: {
                    category_name: req.body.category_name
                }
            })
            if (!category) {
                return
            }
            // console.log(category.dataValues.idcategory)
            const product = await Product.create({
                product_name: a.product_name,
                brand: a.brand,
                product_image: "1",
                idcategory: category.dataValues.idcategory
            })
        } catch (error) {
            console.log(error)
        }
    }
    async getConfiguration(req, res) {
        try {

            const configuration = await Configuration.findAll();
            res.status(200).json(configuration);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching category', error });
        }

    }
    async deleteConfiguration(req, res) {
        try {
            const { idConfiguration } = req.params
            console.log(idConfiguration)
            const configuration = await Configuration.findOne({
                where: {
                    idconfiguration: idConfiguration
                }
            });
            // Xóa người dùng
            await configuration.destroy();
            res.status(200).json({ success: true, message: 'Configuration deleted successfully' });
        } catch (error) {
            console.error('Error deleting Category:', error);
            res.status(500).json({ success: false, message: 'Error deleting Configuration', error });
        }
    }
    async updateConfiguration(req, res) {
        const { idConfiguration } = req.params;
        console.log(idConfiguration);

        if (!idconfiguration) {
            return res.status(400).json({ message: 'Category ID is required' });
        }

        const updatedData = req.body; // Dữ liệu cập nhật
        console.log(updatedData)

        if (!updatedData || Object.keys(updatedData).length === 0) {
            return res.status(400).json({ message: 'No update data provided' });
        }

        try {
            const configuration = await Category.findOne({
                where: { idconfiguration: idConfiguration },
            });

            if (!configuration) {
                return res.status(404).json({ message: `No category found with id ${idConfiguration}` });
            }

            await configuration.update(updatedData); // Cập nhật dữ liệu từ client

            res.status(200).json({ success: true, message: 'Configuration updated successfully', data: configuration });

        } catch (error) {
            console.error('Error updating configuration:', error);
            res.status(500).json({ success: false, message: 'Error updating configuration', error });
        }
    }
    async createConfiguration(req, res) {
        const Data = req.body; // Giả sử dữ liệu cập nhật được gửi từ client trong body
        console.log(Data)
        try {

            const newConfiguration = await Category.create({
                cpu: Data.cpu,
                ram: Data.ram,
                gpu: Data.gpu,
                storage: Data.storage,
                screen: Data.screen,
                resolution: Data.resolution,
                price: Data.price
            });

            console.log('newConfiguration created successfully:', newConfiguration);
            return res.status(201).json({
                configuration: newConfiguration,
            });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error create user', error });
        }
    }
}

module.exports = new AdminController();    
