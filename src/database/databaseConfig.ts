import knex from "knex";
import path from "path";

const dbConnection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export { dbConnection };
