'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    paymentsId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    usersAddressesId: DataTypes.INTEGER,
    statussesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};