// models/Account.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Account = sequelize.define('Account', {
    idaccount: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    verificationtoken: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    isverify: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    tableName: 'account',
    timestamps: false,
});

module.exports = Account;
