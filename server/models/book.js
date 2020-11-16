
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
    {
      
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
    Book.belongsTo(models.user, {foreignKey: "user_id"});
    Book.belongsToMany(models.bookshop,{through: "book_bookshop"});
    
  };

  return Book;
};
