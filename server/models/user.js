module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('user', {
    
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
        
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
       
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        
      },
      unique: {
        args: true,
        
      },
      validate: {
        isEmail: {
          args: true,
          
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 5) {
            throw new Error('Password should be at least 5 characters');
          }
        },
      },
    }
  }, {});
  
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.book, {foreignKey: "user_id"});
  };
  return User;
};