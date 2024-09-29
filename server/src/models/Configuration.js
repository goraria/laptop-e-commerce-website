const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Configuration = sequelize.define('Configuration', {
    idconfiguration: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    cpu: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gpu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    storage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    screen: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    resolution: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'configuratiion',
    timestamps: false,
});

export default Configuration;