module.exports = (sequelize, DataTypes) => {
  const Bookshop = sequelize.define(
    "bookshop",
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
          args: false
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
        },
      }
    },
    {}
  );
  Bookshop.associate = (models) => {
    // associations can be defined here
    Bookshop.hasMany(models.book, {foreignKey: "shop_id"});
  };
  return Bookshop;
};
