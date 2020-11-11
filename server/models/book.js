const bookshop = require("./bookshop");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
    {
      id: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter the title for your book",
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter an author",
        },
      },
      category: {
        type: DataTypes.STRING,
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

      pages: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
        },
      },
    },
    {}
  );
  Book.associate = (models) => {
    // associations can be defined here
    Book.belongsTo(User, { foriegnKey: "user_id" });
    Book.belongsTo(Bookshop);
  };

  return Book;
};
