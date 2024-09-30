// models/Description.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Description = sequelize.define('Description', {
    iddescription: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    idproduct:{
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'idproduct'
        }
    },
    title_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sub_description: {
        type: DataTypes.STRING(2047),
        allowNull: true,
    },
    img_description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'description',
    timestamps: false,
});

module.exports = Description;
