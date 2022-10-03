'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
    `CREATE TABLE  properties  (
       id  bigint unsigned NOT NULL AUTO_INCREMENT,
       property_name  varchar(45) DEFAULT NULL,
       price  decimal(10,2) DEFAULT NULL,
       description  varchar(45) DEFAULT NULL,
       year_build  bigint DEFAULT NULL,
       owner_user_id  bigint unsigned DEFAULT NULL,
       customer_user_id  bigint unsigned DEFAULT NULL,
       status_properties  enum('Free','Buzy','Repair','Ban') DEFAULT NULL,
       createdAt  bigint unsigned NOT NULL,
       updatedAt  bigint unsigned NOT NULL,
      PRIMARY KEY ( id ),
      KEY  fk_owner_properties_id_idx  ( owner_user_id ),
      KEY  fk_customer_Properties_id_idx  ( customer_user_id ),
      CONSTRAINT  fk_customer_Properties_id  FOREIGN KEY ( customer_user_id ) REFERENCES  users  ( id ) ON DELETE SET NULL,
      CONSTRAINT  fk_owner_properties_id  FOREIGN KEY ( owner_user_id ) REFERENCES  users  ( id ) ON DELETE SET NULL ON UPDATE RESTRICT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('properties');
  }
};
