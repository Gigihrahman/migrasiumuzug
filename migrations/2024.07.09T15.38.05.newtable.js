/** @type {import('umzug').MigrationFn<any>} */
export const up = async ({ context: { sequelize, DataTypes } }) => {
  await sequelize.getQueryInterface().createTable("users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

/** @type {import('umzug').MigrationFn<any>} */
export const down = async ({ context: { sequelize } }) => {
  await sequelize.getQueryInterface().dropTable("users");
};