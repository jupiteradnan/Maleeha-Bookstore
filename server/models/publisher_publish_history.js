module.exports = (sequelize, DataTypes) => {
  const Publisher_publish_history = sequelize.define(
    "publisher_publisher_history",
    {
        publisherId: {
        type: DataTypes.INTEGER,
        field: 'publisher_id',
        allowNull: {
          args: false
        },
      },

      publishHistoryId: {
        type: DataTypes.INTEGER,
        field: 'publish_history_id',
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
  
  return Publisher_publish_history;
};
