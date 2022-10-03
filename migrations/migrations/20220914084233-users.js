'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `CREATE TABLE users (
      id bigint unsigned NOT NULL AUTO_INCREMENT,
      first_name varchar(45) DEFAULT NULL,
      email varchar(45) DEFAULT NULL,
      password varchar(45) DEFAULT NULL,
      role enum('Admin','Seller','Buyer','Ghost') DEFAULT 'Ghost',
      register_data bigint DEFAULT NULL,
      timezone bigint DEFAULT NULL,
      createdAt bigint unsigned NOT NULL,
      updatedAt bigint unsigned NOT NULL,
      PRIMARY KEY (id),
      KEY email_register_data_idx (email,register_data),
      KEY role_idx (role)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
