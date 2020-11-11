const publisher = require("./publisher");

module.exports = (sequelize, DataTypes) => {
  const Publisher_history = sequelize.define(
    "publisher_history",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      NoOfBooksPurchased: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
        },
      },

      publishDate: {
        type: DataTypes.Date,
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
  Publisher_history.associate = (models) => {
    // associations can be defined here
    Publisher_history.belongsTo(models.Publisher, {foreignKey: "publisher_id"});
    Publisher_history.belongsTo(models.Book, {foreignKey: "book_id"});
  };
  return Publisher_history;
};
