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
        },
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
    },
}, {
    tableName: 'product',
    timestamps: false,
});

Category.hasMany(Product, { foreignKey: 'idcategory' });
Product.belongsTo(Category, { foreignKey: 'idcategory' });

module.exports = Product;
