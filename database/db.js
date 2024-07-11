import database from '../config/config.json'assert {type:'json'};


import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || "development";
const databaseConfig = database[env];

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  { host: databaseConfig.host, port: 3306, dialect: databaseConfig.dialect }
);

export default sequelize;
