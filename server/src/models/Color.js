// models/Color.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Color = sequelize.define('Color', {
    idcolor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
