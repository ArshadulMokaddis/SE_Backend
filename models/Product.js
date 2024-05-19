const { DataTypes } = require('sequelize');
const db = require('../db');

const product = db.define('products', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
    allowNull: false,
      },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports=product;