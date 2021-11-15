'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // hasMany
      Product.hasMany(models.Image, {
        foreignKey: 'productId',
        as: "images"
      });
      //belongsTo
      Product.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: "brand"
      });
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: "category" 
      });
      Product.belongsTo(models.Size, {
        foreignKey: 'sizeId',
        as: "size"
      });
      Product.belongsTo(models.visibility, {
        foreignKey: 'visibilityId',
        as: "visibility"
      });
      Product.belongsTo(models.Color, {
        foreignKey: 'colorId',
        as: "color"
      });
      //hasMany
      Product.hasMany(models.OrderDetail, {
        foreignKey: 'productId',
        as: "orderDetails"
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categorieId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    visibilityId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};