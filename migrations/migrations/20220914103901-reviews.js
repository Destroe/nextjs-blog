'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
    `CREATE TABLE  reviews (
       id  bigint unsigned NOT NULL AUTO_INCREMENT,
       id_user  bigint unsigned DEFAULT NULL,
       description  varchar(45) DEFAULT NULL,
       id_property  bigint unsigned DEFAULT NULL,
       createdAt  bigint unsigned NOT NULL,
       updatedAt  bigint unsigned NOT NULL,
      PRIMARY KEY ( id ),
      KEY  reviews_property_idx  ( id_property ),
      KEY  fk_reviews_1_idx  ( id_property ),
      KEY  fk_users_reviews_id_idx  ( id_user ),
      CONSTRAINT  fk_properties_reviews_id  FOREIGN KEY ( id_property ) REFERENCES  properties  ( id ) ON DELETE SET NULL,
      CONSTRAINT  fk_users_reviews_id  FOREIGN KEY ( id_user ) REFERENCES  users  ( id ) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews');
  }
};
