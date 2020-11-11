module.exports = (sequelize, DataTypes) => {
  const Bookshop = sequelize.define(
    "bookshop",
    {
      id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
        },
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
  Bookshop.associate = (models) => {
    // associations can be defined here
    Bookshop.hasMany(Book);
  };
  return Bookshop;
};
