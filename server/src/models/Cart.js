// models/Cart.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cart = sequelize.define('Cart', {
    idcart: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idaccount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'cart',
    timestamps: false,
});

export default Cart;
