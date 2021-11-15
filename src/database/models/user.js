'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo
      User.belongsTo(models.Rol, {
        foreignKey: 'rolId',
        as: "rol"
      });
      //hasOne - fk
      User.hasOne(models.Address, {
        foreignKey: 'userId',
        as: "addresses"
      });
      //hasMany
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: "orders"
      });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    rolesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};