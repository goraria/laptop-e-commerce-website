// models/Account.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    iduser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    idaccount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    avater: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'user',
    timestamps: false,
});

export default User;
