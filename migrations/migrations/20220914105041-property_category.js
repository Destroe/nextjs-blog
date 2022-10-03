'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
    `CREATE TABLE  property_category  (
       id  bigint unsigned NOT NULL AUTO_INCREMENT,
       categories_id  bigint unsigned DEFAULT NULL,
       property_id  bigint unsigned DEFAULT NULL,
      PRIMARY KEY (id),
      KEY  fk_categories_property_category_id_idx  ( categories_id ),
      KEY  fk_property_property_category_id_idx  ( property_id ),
      CONSTRAINT  fk_categories_property_category_id  FOREIGN KEY ( categories_id ) REFERENCES  categories  ( id ) ON DELETE SET NULL,
      CONSTRAINT  fk_property_property_category_id  FOREIGN KEY (property_id) REFERENCES  properties  ( id ) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('property_category');
  }
};

