
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      
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
    },
    {}
  );
    User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.book, {foreignKey: "user_id"});
   
    
  };

  return User;
};
