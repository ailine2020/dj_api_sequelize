'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Djs', {
      id: {
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn('uuid_generate_v4'), 
        type: Sequelize.UUID
      },
      url_name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      biography: {
        allowNull: false,
        type: Sequelize.STRING(2000)
      },
      soundcloud: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      facebook: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      instagram: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      spotify: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      beatport: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      mixcloud: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      youtube: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      club_id: {
        type: Sequelize.UUID,
        // allowNull: false,
        references: {
          key: "id",
          model: "Clubs"
        }
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
    await queryInterface.dropTable('Djs');
  }
};