const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');  // Kết nối Sequelize

class Account extends Model {
    constructor() {
        super();
    }
}

Account.init({
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
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    sequelize,
    modelName: 'Account',
    tableName: 'account',
    timestamps: false,
});

module.exports = Account;
