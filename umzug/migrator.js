import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import { Umzug, SequelizeStorage } from "umzug";
import  sequelize from '../database/db.js'
import { DataTypes } from "sequelize";
import * as path from "path";


export const migrator = new Umzug({
  migrations: {
    glob: [
      "migrations/*.{js,cjs,mjs}",
      {
        cwd: path.dirname(import.meta.url.replace("file://", "")),
      },
    ],
    context: { sequelize, DataTypes },
    storage: new SequelizeStorage({
      sequelize,
    }),
    logger: console,
  },
});

migrator
  .runAsCLI()
  .catch(console.error)
  .then((e) => {
    console.log(e);
    process.exit(0);
  });