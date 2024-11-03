// models/Discount.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Discount = sequelize.define('Discount', {
    iddiscount: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    discount_name: DataTypes.STRING,
    percentage_discount: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
}, {
    tableName: 'discount',
    timestamps: false,
});

module.exports = Discount;
