'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Publish_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_of_books_published: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      publish_date: {
        type: Sequelize.DATE
      },
      
      publisher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "publishers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      book_id: {
        type: Sequelize.INTEGER,
        field: "book_id",
        references: {
          model: "books",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Publish_histories');
  }
};