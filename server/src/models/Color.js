// models/Color.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product')
const Color = sequelize.define('Color', {
    idcolor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idproduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'idproduct'
        }
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'color',
    timestamps: false,
});

module.exports = Color;
