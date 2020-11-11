const publisher_history = require("./publisher_history");

module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define(
    "publisher",
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
      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
        },
      },

      website: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
        },
      },
    },
    {}
  );
  Publisher.associate = (models) => {
    // associations can be defined here
    Publisher.hasMany(models.Book);
    publisher_history.hasMany(model.publisher_history);
  };
  return Publisher;
};
