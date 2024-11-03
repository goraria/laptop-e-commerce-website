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
        },
    },
    cpu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ram: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    gpu: {
        type: DataTypes.STRING,
        defaultValue: 'Onboard',
    },
    storage: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    screen: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    resolution: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'configuration',
    timestamps: false,
});

Product.hasMany(Configuration, { foreignKey: 'idproduct' });
Configuration.belongsTo(Product, { foreignKey: 'idproduct' });

module.exports = Configuration;
