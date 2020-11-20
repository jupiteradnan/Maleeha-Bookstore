module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
    {
      
      title: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
        },
        unique: true
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE
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
    {},
    {
      underscored: true,
      paranoid: true,
    }
  );
    Book.associate = (models) => {
    // associations can be defined here
    Book.belongsTo(models.user, {foreignKey: "user_id", as: 'author'});
    Book.belongsToMany(models.bookshop,{through: "book_bookshop"});
    
  };

  return Book;
};