import path from "path";

module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "admin",
    database: "proffy",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
