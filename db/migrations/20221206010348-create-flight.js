"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      airline: {
        type: Sequelize.STRING,
      },
      origin: {
        type: Sequelize.STRING,
      },
      destination: {
        type: Sequelize.STRING,
      },
      departureDate: {
        type: Sequelize.DATE,
      },
      departureTime: {
        type: Sequelize.TIME,
      },
      arrivalDate: {
        type: Sequelize.DATE,
      },
      arrivalTime: {
        type: Sequelize.TIME,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
