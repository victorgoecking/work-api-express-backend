'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('message_received', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      origin: {
        type: Sequelize.STRING,
      },
      destiny: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
      },      
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('message_received');
  }
};
