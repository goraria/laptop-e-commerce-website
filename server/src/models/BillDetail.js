// models/BillDetail.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Bill = require('./Bill');
const Product = require('./Product');
const Configuration = require('./Configuration');

const BillDetail = sequelize.define('BillDetail', {
    idbill_details: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idbill: {
        type: DataTypes.INTEGER,
        references: {
            model: Bill,
            key: 'idbill',
        }
    },
    idproduct: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'idproduct',
        }
    },
    idconfiguration: {
        type: DataTypes.INTEGER,
        references: {
            model: Configuration,
            key: 'idconfiguration',
        }
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

Bill.hasMany(BillDetail, { foreignKey: 'idbill' });
BillDetail.belongsTo(Bill, { foreignKey: 'idbill' });

module.exports = BillDetail;
