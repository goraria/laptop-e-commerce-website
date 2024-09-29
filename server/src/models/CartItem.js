const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CartItem = sequelize.define('CartItem', {
    idcartitem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idcart: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idproduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idcolor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idconfiguration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'cart_item',
    timestamps: false,
});

export default CartItem;