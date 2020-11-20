'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('book_bookshops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      bookshop_id: {
        type: Sequelize.INTEGER,
        field: "bookshop_id",
        references: {
          model: "bookshops",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },


     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('book_bookshops');
  }
};