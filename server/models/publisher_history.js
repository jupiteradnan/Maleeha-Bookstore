const publisher = require("./publisher");

module.exports = (sequelize, DataTypes) => {
  const Publisher_history = sequelize.define('Publisher_history', {
    id: {
      type: Sequelize.INTEGER
    },
    NoOfBooksPurchased: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        
      }
    },
    
    publishDate: {
      type: DataTypes.Date,
      
    },
   
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Book',
        key: 'id',
        as: 'bookId',
      }
    }
  
   
  }, {});
  Publisher_history.associate = (models) => {
    // associations can be defined here
    Publisher_history.belongsTo(Publisher);
    Publisher_history.belongsTo(Book);
  };
  return Publisher_history;
};