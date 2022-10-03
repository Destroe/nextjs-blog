'use strict';


const faker = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const userRole  = ["Admin", "Seller", "Buyer"]
    
    var usersFake = [];
    var amountAdmin = 10;
    var amountSeller = 60;
    var amountBuyyer = 60;
    var data = Math.round(new Date().getTime()/1000.0);
   
    // var a = new Date(data * 1000);
    // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // var year = a.getFullYear();
    // var month = months[a.getMonth()];
    // var date = a.getDate();
    // var hour = a.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    
    
    
    
    
    for(let i=0; i<amountSeller; i++)
    {
    usersFake.push(
      {
        first_name:  faker.faker.name.firstName(),
        email:  faker.faker.internet.email(),
        password:  faker.faker.internet.password(),
        role: "Seller",
        register_data: data,
        timezone: null,
        createdAt: data,
        updatedAt: data,
      }
      );
    }
    
    for(let i=0; i<amountBuyyer; i++)
    {
    usersFake.push(
      {
        first_name:  faker.faker.name.firstName(),
        email:  faker.faker.internet.email(),
        password:  faker.faker.internet.password(),
        role: "Buyer",
        register_data: data,
        timezone: null,
        createdAt: data,
        updatedAt: data,
      }
      );
    }

    for(let i=0; i<amountAdmin; i++)
    {
    usersFake.push(
      {
        first_name:  faker.faker.name.firstName(),
        email:  faker.faker.internet.email(),
        password:  faker.faker.internet.password(),
        role: "Admin",
        register_data: data,
        timezone: null,
        createdAt: data,
        updatedAt: data,
      }
      );
    }

    return queryInterface.bulkInsert('users', usersFake, {});
  },
  
down: async (queryInterface, Sequelize) => {
  queryInterface.bulkDelete('users', null, {});
}
}
