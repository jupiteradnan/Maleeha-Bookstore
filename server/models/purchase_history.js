const publisher = require("./publisher");

module.exports = (sequelize, DataTypes) => {
  const Purchase_history = sequelize.define(
    "purchase_history",
    {
      id: {
        type: Sequelize.INTEGER,
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
      },

      bookId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Book",
          key: "id",
          as: "bookId",
        },
      },
    },
    {}
  );

  Purchase_history.associate = (models) => {
    // associations can be defined here
    Purchase_history.belongsTo(Book);
    Purchase_history.belongsTo(Publisher);
  };
  return Purchase_history;
};
