'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Purchase_history.init({
    purchaserId: DataTypes.INTEGER,
    NoOfBooksPurchased: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    purchaseDate: DataTypes.DATE,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Purchase_history',
  });
  return Purchase_history;
};