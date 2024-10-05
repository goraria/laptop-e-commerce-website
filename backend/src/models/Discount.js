// models/Discount.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Discount = sequelize.define('Discount', {
    iddiscount: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    discount_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    percentage_discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'discount',
    timestamps: false,
});

module.exports = Discount;
