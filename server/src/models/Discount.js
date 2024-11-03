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
        type: DataTypes.STRING(8),
        allowNull: false,
    },
    percentage_discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
    tableName: 'discount',
    timestamps: false,
});

module.exports = Discount;
