// models/Bill.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bill = sequelize.define('Bill', {
    idbill: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idaccount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    iddiscount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'bill',
    timestamps: false,
});

export default Bill;
