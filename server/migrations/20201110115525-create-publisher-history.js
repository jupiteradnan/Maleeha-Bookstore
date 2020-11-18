'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Publisher_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      bookId: {
        type: Sequelize.INTEGER
      },
      NoOfBooksPurchased: {
        type: Sequelize.INTEGER
      },
      publishDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      publisher_historyId: {
        type: Sequelize.INTEGER,
        field: "publisher_history_id",
        references: {
          model: "publisher_history",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Publisher_histories');
  }
};