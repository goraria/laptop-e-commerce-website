const Product = require('../models/Product');
// const bcrypt = require('bcrypt');  // Sử dụng bcrypt cho mã hóa mật khẩu
const jwt = require('jsonwebtoken');
const Description = require('../models/Description')

class ProductController {

    async loadProduct(req, res) {
        try {

            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }

    }

    async loadDesciption(req, res, id) {
        try {

            const description = await Description.findOne({ where });
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }

    }

}
module.exports = new ProductController()
