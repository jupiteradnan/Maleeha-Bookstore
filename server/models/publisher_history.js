const publisher = require("./publisher");

module.exports = (sequelize, DataTypes) => {
  const Publisher_history = sequelize.define(
    "publisher_history",
    {
      id: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.DATE,
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
    Publisher_history.belongsTo(models.publisher, {foreignKey: "publisher_id"});
    Publisher_history.belongsTo(models.book, {foreignKey: "book_id"});
  };
  return Publisher_history;
};
