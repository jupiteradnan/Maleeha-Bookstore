
module.exports = (sequelize, DataTypes) => {
  const Book_bookshop = sequelize.define(
    "book_bookshop",
    {
        bookId: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false
        },
      },

      bookShopId: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false
        },
      },
    },
    {},
    {
      underscored: true,
      paranoid: true,
    }
  );
  
  return Book_bookshop;
};
