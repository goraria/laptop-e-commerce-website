// models/CartItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cart = require('./Cart');
const Product = require('./Product');
const Color = require('./Color');
const Configuration = require('./Configuration');

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
    idcolor: {
        type: DataTypes.INTEGER,
        references: {
            model: Color,
            key: 'idcolor',
        }
    },
    idconfiguration: {
        type: DataTypes.INTEGER,
        references: {
            model: Configuration,
            key: 'idconfiguration',
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'cart_item',
    timestamps: false,
});

Cart.hasMany(CartItem, { foreignKey: 'idcart' });
CartItem.belongsTo(Cart, { foreignKey: 'idcart' });

module.exports = CartItem;
