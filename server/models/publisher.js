const publisher_history = require("./publisher_history");

module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define("publisher",
    {
      id: {
        
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
    Publisher.hasMany(models.Book,{foreignKey: "publisher_id"});
   // publisher_history.hasMany(models.publisher_history);
    Publisher.belongsToMany(models.publisher_history,{through: publisher_publisher_history});
  };
  return Publisher;
};
