const bookshop = require("./bookshop");
const book_bookshop = require("./book_bookshop");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
          
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
          
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false
        },
      },

      pages: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false
        },
      },
    },
    {}
  );
    Book.associate = (models) => {
    // associations can be defined here
    Book.belongsTo(models.User, {foreignKey: "user_id"});
    Book.belongsToMany(models.Bookshop,{through: book_bookshop});
    
  };

  return Book;
};
