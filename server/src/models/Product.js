// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    idproduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idconfiguration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idcategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    iddescription: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'product',
    timestamps: false,
});

export default Product;
