// models/Accessory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Accessory = sequelize.define('Accessory', {
    idaccessory: {
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
    nums_key: DataTypes.INTEGER,
    switch_type: DataTypes.STRING,
    connection: DataTypes.STRING,
}, {
    tableName: 'accessory',
    timestamps: false,
});

Product.hasOne(Accessory, { foreignKey: 'idproduct' });
Accessory.belongsTo(Product, { foreignKey: 'idproduct' });

module.exports = Accessory;
