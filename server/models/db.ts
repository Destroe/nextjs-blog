import mysql2 from 'mysql2';
import { Sequelize } from 'sequelize';
const { DB_HOST, DB_NAME, DB_USER, DB_PSWD } = process.env

const db = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PSWD,
    {
        host: DB_HOST,
        dialect: 'mysql',
        dialectModule: mysql2,
        define: {
        timestamps: true
        }
    }
);
export default db;