import knex from "knex";
import path from 'path';

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "docker",
    database: "proffy",
  },
});

export default db;
