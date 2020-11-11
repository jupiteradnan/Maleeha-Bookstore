module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Publisher', {
    id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
     
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        
      }
    },

    website: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
       
      }
    },
   
  }, {});
  Publisher.associate = (models) => {
    // associations can be defined here
    Publisher.hasMany(Book);
  };
  return Publisher;
};