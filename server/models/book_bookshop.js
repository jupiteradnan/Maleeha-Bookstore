module.exports = (sequelize, DataTypes) => {
  const Book_bookshop = sequelize.define(
    "book_bookshop",
    {
        bookId: {
        type: DataTypes.INTEGER,
        field: 'book_id',
        allowNull: {
          args: false
        },
      },

      bookshopId: {
        type: DataTypes.INTEGER,
        field: 'bookshop_id',
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

