'use strict';

const fs = require('fs');

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = JSON.parse(fs.readFileSync('./data/profiles.json', 'utf-8'))
    .map(el => {
      return {
        firstName: el.firstname,
        lastName: el.lastname,
        imgUrl: el.imgUrl,
        UserId: el.UserId,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    });

    return queryInterface.bulkInsert('Profiles', data)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkInsert('Profiles', null)
  }
};
