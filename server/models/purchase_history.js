const publisher = require("./publisher");

module.exports = (sequelize, DataTypes) => {
  const Purchase_history = sequelize.define(
    "purchase_history",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

      },
      NoOfBooksPurchased: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
        },
      },
      purchaseDate: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
        },
      }
    },
    {}
  );

  Purchase_history.associate = (models) => {
    // associations can be defined here
    Purchase_history.belongsTo(models.Book, {foreignKey: "book_id"});
    Purchase_history.belongsTo(models.Publisher, {foreignKey: "publisher_id"});
  };
  return Purchase_history;
};
