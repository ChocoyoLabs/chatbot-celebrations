'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('commands', [
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
    ], {}).catch(function (err) {
          console.error(err.message);
          throw err;
        });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('commands', [
      {
        command:'celebrations.wikipedia',
      },
    ], {});
  },
};
