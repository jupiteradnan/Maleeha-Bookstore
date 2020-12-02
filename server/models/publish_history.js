module.exports = (sequelize, DataTypes) => {
  const Publish_history = sequelize.define(
    "publish_history",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      noOfBooksPublished: {
        type: DataTypes.INTEGER,
        field: 'no_of_books_publishsed',
        allowNull: {
          args: false,
        },
      },

      publishDate: {
        type: DataTypes.DATE,
        field: 'publish_date',
      },

      bookId: {
        type: DataTypes.INTEGER,
        field: 'book_id',
        references: {
          model: "Book",
          key: "id",
          //as: "author",
        },
      },

      publisherId: {
        type: DataTypes.INTEGER,
        field: 'publisher_id',
        references: {
          model: "Publishers",
          key: "id",
          as: "author",
        },
      },
    },
    {},
    {
      underscored: true,
      paranoid: true,
    }
  );
  Publish_history.associate = (models) => {
    // associations can be defined here
    Publish_history.belongsTo(models.publisher, {foreignKey: "publisher_id"});
    Publish_history.belongsTo(models.book, {foreignKey: "book_id"});
  };
  return Publish_history;
};