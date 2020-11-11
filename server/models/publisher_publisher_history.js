module.exports = (sequelize, Types) => {
  
  const publisher_publisher_history = sequelize.define(
    "publisher_publisher_history",
    {},
    {
      underscored: true,
      paranoid: true,
    }
  );

  return publisher_publisher_history;
};
