const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BillDetail = sequelize.define('BillDetail', {
    idbilldetail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idbill: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idproduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idconfiguration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'bill_detail',
    timestamps: false,
});

export default BillDetail;