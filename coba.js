import { Umzug, SequelizeStorage } from "umzug";
import { Sequelize, DataTypes } from "sequelize";
import * as path from "path";

const sequelize = new Sequelize(
 'migrasi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  }
);

export const migrator = new Umzug({

  migrations: {
    glob: [
      "migrations/*.{js,cjs,mjs}",
      { cwd: path.dirname(import.meta.url.replace("e:///", "")) },
    ],
  },
  context: { sequelize, DataTypes },
  storage: new SequelizeStorage({
    sequelize,
  }),
  logger: console,
});
const coba = async()=>{
  const output = await migrator.options.migrations
  console.log(output)
  migrator.runAsCLI();
}
 
  coba()

