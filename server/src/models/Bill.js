// models/Bill.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./Account');
const Discount = require('./Discount');

const Bill = sequelize.define('Bill', {
    idbill: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idaccount: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'idaccount',
        }
    },
    iddiscount: {
        type: DataTypes.INTEGER,
        references: {
            model: Discount,
            key: 'iddiscount',
        },
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'bill',
    timestamps: false,
});

Account.hasMany(Bill, { foreignKey: 'idaccount' });
Bill.belongsTo(Account, { foreignKey: 'idaccount' });

module.exports = Bill;
