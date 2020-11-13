module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
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
      username: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
          
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false
        },
      },
      password: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false
        },
      },
    },
    {}
  );
    User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.book, {foreignKey: "user_id"});
    
  };

  return User;
};
