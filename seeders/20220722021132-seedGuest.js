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
     const data = JSON.parse(fs.readFileSync('./data/userGuest.json', 'utf-8'))
     .map(el => {
       return {
         email: el.email,
         password: el.password,
         role: el.role,
         createdAt : new Date(),
         updatedAt : new Date()
       }
     });

    return queryInterface.bulkInsert('Users', data)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkInsert('Users', null)
  }
};