module.exports = (sequelize, DataTypes) => {
  const Purchase_history = sequelize.define(
    "purchase_history",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

      },
      noOfBooksPurchased: {
        type: DataTypes.INTEGER,
        field: 'no_of_books_purchased',
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
        type: DataTypes.DATE,
        field: 'purchase_date',
        allowNull: {
          args: false,
        },
      }
    },
    {},
    {
      underscored: true,
      paranoid: true,
    }
  );

  Purchase_history.associate = (models) => {
    // associations can be defined here
    Purchase_history.belongsTo(models.book, {foreignKey: "book_id"});
    Purchase_history.belongsTo(models.publisher, {foreignKey: "publisher_id"});
  };
  return Purchase_history;
};
