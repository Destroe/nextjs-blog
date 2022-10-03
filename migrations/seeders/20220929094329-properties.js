'use strict';

const faker = require('@faker-js/faker');
const { QueryTypes } = require('sequelize');


module.exports = {
  up: async (queryInterface, Sequelize) => {

    const userOwner =  await queryInterface.sequelize.query('SELECT * FROM users WHERE role = "Seller"', { type: QueryTypes.SELECT });
    const userCustomer =  await queryInterface.sequelize.query("SELECT * FROM users WHERE role = 'Buyer'", { type: QueryTypes.SELECT });

    var data_properties = [];
    const propertyStatus  = ["Free", "Buzy", "Repair", "Ban"]
    var data = Math.round(new Date().getTime()/1000.0);
    console.log(userCustomer)
    for (let i = 0; i<60; i++)
    {
      
        data_properties.push(
          {
            property_name: faker.faker.name.firstName(),
            price: faker.faker.finance.amount(),
            description: faker.faker.lorem.paragraph(),
            year_build: data,
            bed: faker.faker.datatype.number({ min: 1, max: 5, precision: 1}),
            bath: faker.faker.datatype.number({ min: 1, max: 5, precision: 1}),
            star: faker.faker.datatype.number({ min: 1, max: 5, precision: 1}),
            views: faker.faker.datatype.number({ min: 10, max: 100, precision: 1}),
            country: faker.faker.address.county(),
            city: faker.faker.address.city(),
            streetAddress: faker.faker.address.streetAddress(),
            balcony: faker.faker.datatype.boolean(),
            parking: faker.faker.datatype.boolean(),
            pool: faker.faker.datatype.boolean(),
            beach: faker.faker.datatype.boolean(),
            pet_friendly: faker.faker.datatype.boolean(),
            kid_friendly: faker.faker.datatype.boolean(),
            air_conditioning: faker.faker.datatype.boolean(),
            categori_id: faker.faker.datatype.number({min: 1, max: 4, precision: 1}),
            owner_user_id: userOwner[i].id,
            customer_user_id: userCustomer[i].id,
            status_properties: faker.faker.helpers.arrayElement(propertyStatus),
            createdAt: data,
            updatedAt: data,
          }
        );
      }


    return queryInterface.bulkInsert('properties', data_properties, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('properties', null, {});
  }
};
