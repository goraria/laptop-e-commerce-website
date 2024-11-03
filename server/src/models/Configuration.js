// models/Configuration.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Configuration = sequelize.define('Configuration', {
    idconfiguration: {
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
    cpu: DataTypes.STRING,
    ram: DataTypes.INTEGER,
    gpu: DataTypes.STRING,
    storage: DataTypes.INTEGER,
    screen: DataTypes.INTEGER,
    resolution: DataTypes.STRING,
    price: DataTypes.INTEGER,
}, {
    tableName: 'configuration',
    timestamps: false,
});

Product.hasMany(Configuration, { foreignKey: 'idproduct' });
Configuration.belongsTo(Product, { foreignKey: 'idproduct' });

module.exports = Configuration;
