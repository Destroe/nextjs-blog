'use strict';

const faker = require('@faker-js/faker');
const { QueryTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    const userOwner =  await queryInterface.sequelize.query('SELECT * FROM users WHERE role = "Seller"', { type: QueryTypes.SELECT });
    const userCustomer =  await queryInterface.sequelize.query("SELECT * FROM users WHERE role = 'Buyer'", { type: QueryTypes.SELECT });
    const properys_id =  await queryInterface.sequelize.query("SELECT * FROM properties WHERE status_properties = 'Free'", { type: QueryTypes.SELECT });
    var ordersData = [];
    var data = Math.round(new Date().getTime()/1000.0);

    for(let i=0; i<properys_id.length; i++)
    {
    ordersData.push(
      {
        owner_user_id:  userOwner[i].id,
        customer_user_id:  userCustomer[i].id,
        property_id:  properys_id[i].id,
        order_data: data,
        timezone: null,
        price: faker.faker.finance.amount(),
        createdAt: data,
        updatedAt: data,
      }
      );
    }
    
    
    
    return queryInterface.bulkInsert('orders', ordersData, {});
  },

  
  
  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('orders', null, {});
  }
};
