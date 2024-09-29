// models/Rating.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rating = sequelize.define('Rating', {
    idrating: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    idaccount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idproduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING(1023),
        allowNull: true,
    }
}, {
    tableName: 'rating',
    timestamps: false,
});

export default Rating;
