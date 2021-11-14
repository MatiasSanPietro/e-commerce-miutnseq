'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shipping.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    price: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    apartment: DataTypes.STRING,
    cp: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    ordersId: DataTypes.INTEGER,
    ordersPaymentsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};