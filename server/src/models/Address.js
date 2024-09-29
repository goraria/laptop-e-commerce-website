// models/Address.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
    idaddress: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    idaccount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tower: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'address',
    timestamps: false,
});

export default Address;
