// models/CartItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cart = require('./Cart');
const Product = require('./Product');
const Configuration = require('./Configuration');
const Color = require('./Color');

const CartItem = sequelize.define('CartItem', {
    idcart_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idcart: {
        type: DataTypes.INTEGER,
        references: {
            model: Cart,
            key: 'idcart',
        }
    },
    idproduct: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'idproduct',
        }
    },
    idcolor: DataTypes.INTEGER,
    idconfiguration: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
}, {
    tableName: 'cart_item',
    timestamps: false,
});

Cart.hasMany(CartItem, { foreignKey: 'idcart' });
CartItem.belongsTo(Cart, { foreignKey: 'idcart' });
Product.hasMany(CartItem, { foreignKey: 'idproduct' });
CartItem.belongsTo(Product, { foreignKey: 'idproduct' });

module.exports = CartItem;
