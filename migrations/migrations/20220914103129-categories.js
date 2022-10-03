'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
    `CREATE TABLE  categories  (
       id  bigint unsigned NOT NULL AUTO_INCREMENT,
       categor_name  enum('House','Apartment','Loft','Townhouse') DEFAULT NULL,
      PRIMARY KEY ( id )
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
