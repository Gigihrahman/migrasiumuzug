
import { Sequelize } from "sequelize";


const db = new Sequelize('migrasi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


export default db;