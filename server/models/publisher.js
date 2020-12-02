const publisher = require("./publisher");

module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define(
    "publisher",
    {
      id: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
    {},
    {
      underscored: true,
      paranoid: true,
    }
  );
  Publisher.associate = (models) => {
    // associations can be defined here
    Publisher.hasMany(models.book,{foreignKey: "publisher_id"});
    Publisher.belongsToMany(models.publish_history,{through: "publisher_publisher_history"});
   
  };
  return Publisher;
};