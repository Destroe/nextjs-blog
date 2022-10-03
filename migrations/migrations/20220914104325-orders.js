'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
    `CREATE TABLE  orders  (
    id  bigint unsigned NOT NULL AUTO_INCREMENT,
    owner_user_id  bigint unsigned DEFAULT NULL,
    customer_user_id  bigint unsigned DEFAULT NULL,
    property_id  bigint unsigned DEFAULT NULL,
    order_data  bigint DEFAULT NULL,
    timezone  bigint DEFAULT NULL,
    price  decimal(10,2) DEFAULT NULL,
    createdAt  bigint unsigned NOT NULL,
    updatedAt  bigint unsigned NOT NULL,
    PRIMARY KEY (id),
    KEY  fk_owner_user_idx  ( owner_user_id ),
    KEY  fk_orders_1_idx  ( customer_user_id ),
    KEY  fk_property_id_idx  ( property_id ),
    KEY  price_order_data_idx  ( order_data , price ),
    CONSTRAINT  fk_customer_user_id  FOREIGN KEY ( customer_user_id ) REFERENCES  users  ( id ) ON DELETE SET NULL,
    CONSTRAINT  fk_owner_user_id  FOREIGN KEY ( owner_user_id ) REFERENCES  users  ( id ) ON DELETE SET NULL,
    CONSTRAINT  fk_property_id  FOREIGN KEY ( property_id ) REFERENCES  properties  ( id ) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
