'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Publisher_history.init({
    publisherId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    NoOfBooksPurchased: DataTypes.INTEGER,
    publishDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Publisher_history',
  });
  return Publisher_history;
};