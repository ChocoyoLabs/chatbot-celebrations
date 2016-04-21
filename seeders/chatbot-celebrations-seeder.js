'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('commands', [
      {
        pattern: 'celebra\\shoy',
        command: 'celebrations.wikipedia',
        priority: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern: 'festividades',
        command: 'celebrations.wikipedia',
        priority: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pattern: 'celebraciones',
        command: 'celebrations.wikipedia',
        priority: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('commands', [
      {
        command:'celebrations.wikipedia',
      },
    ]);
  },
};
