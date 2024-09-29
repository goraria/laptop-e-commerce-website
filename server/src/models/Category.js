const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
    idcategory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}, {
    tableName: 'category',
    timestamps: false,
});

export default Category;