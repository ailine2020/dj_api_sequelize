'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalgenres', {
      id: {
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn('uuid_generate_v4'), 
        type: Sequelize.UUID
      },
      dj_id: {
        allowNull: false,
        references: {
          key: "id",
          model: "Djs"
        },
        type: Sequelize.UUID
      },
      musicalgenre_id: {
        allowNull: false,
        references: {
          key: "id",
          model: "Musicalgenres"
        },
        type: Sequelize.UUID
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DjMusicalgenres');
  }
};