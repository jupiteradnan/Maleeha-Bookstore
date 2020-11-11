module.exports = (sequelize, Types) => {
  
  const book_bookshop = sequelize.define(
    "book_bookshop",
    {},
    {
      underscored: true,
      paranoid: true,
    }
  );

  return book_bookshop;
};
