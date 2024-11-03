// models/Bill.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./Account');
const Address = require('./Address');

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
    },
    idaddress: {
        type: DataTypes.INTEGER,
        references: {
            model: Address,
            key: 'idaddress',
        }
    },
    date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    status: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
    },
}, {
    tableName: 'bill',
    timestamps: false,
});

Account.hasMany(Bill, { foreignKey: 'idaccount' });
Bill.belongsTo(Account, { foreignKey: 'idaccount' });
Address.hasMany(Bill, { foreignKey: 'idaddress' });
Bill.belongsTo(Address, { foreignKey: 'idaddress' });

module.exports = Bill;
