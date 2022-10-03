'use strict';


const faker = require('@faker-js/faker');
const { QueryTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const categ_id = await queryInterface.sequelize.query('SELECT * FROM categories', { type: QueryTypes.SELECT });
    const propery_id = await queryInterface.sequelize.query("SELECT * FROM properties", { type: QueryTypes.SELECT });

    const len = 4;

    let property_cat = [];
    for (let i = 0; i < len; i++) {
     

      for (let j = 0; j < 15; j++) {
        property_cat.push(
          {
            categories_id: categ_id[i].id,
            property_id: propery_id[j].id
          }
        );
      }
    }

    
    return queryInterface.bulkInsert('property_categories', property_cat, {});
  },





  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('property_categories', null, {});
  }
};

