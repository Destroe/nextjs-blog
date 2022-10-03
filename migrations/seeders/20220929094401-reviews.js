'use strict';


const faker = require('@faker-js/faker');
const { QueryTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var reviews = [];
    const users_id =  await queryInterface.sequelize.query('SELECT * FROM users', { type: QueryTypes.SELECT });
    const propery_id =  await queryInterface.sequelize.query("SELECT * FROM properties", { type: QueryTypes.SELECT });
    var data = Math.round(new Date().getTime()/1000.0);
    
    for(let i=0; i<10; i++){
      for(let j=0; j<60; j++)
    reviews.push(
      {
        id_user:  users_id[i].id,
        description:  faker.faker.lorem.paragraphs(),
        id_property:  propery_id[j].id,
        createdAt: data,
        updatedAt: data,
      }
      );
    }
  return queryInterface.bulkInsert('reviews', reviews, {});
},

down: async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('reviews', null, {});
}
};

