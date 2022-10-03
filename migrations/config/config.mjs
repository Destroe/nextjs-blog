export default {
  "development": {
    "username": "denis",
    "password": "qwerty",
    "database": "denisdb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  test: {
    storage: ':memory',
    dialect: 'sqlite',
  },
  staging: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    logging: false,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    logging: false,
    dialect: 'mysql',
  },
};
