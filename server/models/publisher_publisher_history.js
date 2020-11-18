
module.exports = (sequelize, DataTypes) => {
  const Publisher_publisher_history = sequelize.define(
    "publisher_publisher_history",
    {
        publisherId: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false
        },
      },

      publisher_historyId: {
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
  
  return Publisher_publisher_history;
};
