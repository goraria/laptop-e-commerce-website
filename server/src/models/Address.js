// models/Address.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./Account');

const Address = sequelize.define('Address', {
    idaddress: {
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
    tower: DataTypes.STRING,
    street: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
}, {
    tableName: 'address',
    timestamps: false,
});

Account.hasMany(Address, { foreignKey: 'idaccount' });
Address.belongsTo(Account, { foreignKey: 'idaccount' });

module.exports = Address;
