// models/Description.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Description = sequelize.define('Description', {
    iddescription: {
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
    title_description: DataTypes.STRING,
    sub_description: DataTypes.STRING,
    img_description: DataTypes.STRING,
}, {
    tableName: 'description',
    timestamps: false,
});

Product.hasMany(Description, { foreignKey: 'idproduct' });
Description.belongsTo(Product, { foreignKey: 'idproduct' });

module.exports = Description;
