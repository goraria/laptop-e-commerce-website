// models/Category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
    idcategory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'category',
    timestamps: false,
});

module.exports = Category;
