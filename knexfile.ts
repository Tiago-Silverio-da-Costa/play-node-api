import type { Knex, knex as setupKnex } from "knex";

// Update with your config settings.
interface KnexConfig {
  [key: string]: object;
}

export const knex: KnexConfig = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/mydb.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      extension: "ts",
      directory: "./db/migrations",
    },
    
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = knex;
