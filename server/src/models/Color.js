// models/Color.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Color = sequelize.define('Color', {
    idcolor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idproduct: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'idproduct',
        }
    },
    color: DataTypes.STRING,
}, {
    tableName: 'color',
    timestamps: false,
});

Product.hasMany(Color, { foreignKey: 'idproduct' });
Color.belongsTo(Product, { foreignKey: 'idproduct' });

module.exports = Color;
