'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var categories = [];
    var cat=["House","Apartment","Loft","Townhouse"];


    categories.push(
      {
        categor_name: "House"
      },
    )
    categories.push(
      {
        categor_name: "Apartment"
      },
    )

    categories.push(
      {
        categor_name: "Loft"
      },
    )

    categories.push(
      {
        categor_name: "Townhouse"
      },
  );

    return queryInterface.bulkInsert('categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('categories', null, {});
  }
  }

