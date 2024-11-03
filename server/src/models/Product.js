// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');

const Product = sequelize.define('Product', {
    idproduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idcategory: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'idcategory',
        }
    },
    product_name: DataTypes.STRING,
    brand: DataTypes.STRING,
    product_image: DataTypes.STRING,
}, {
    tableName: 'product',
    timestamps: false,
});

module.exports = Product;
