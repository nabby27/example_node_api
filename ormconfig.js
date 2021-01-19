'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const config = [
  {
    type: 'postgres',
    name: 'backoffice',
    host: process.env.BACKOFFICE_DB_HOST,
    port: parseInt(process.env.BACKOFFICE_DB_PORT, 10),
    username: process.env.BACKOFFICE_DB_USER,
    password: process.env.BACKOFFICE_DB_PASSWORD,
    database: process.env.BACKOFFICE_DB_DATABASE,
    migrations: [
      process.env.MIGRATIONS_PATH_FOR_BACKOFFICE
    ],
    cli: {
      migrationsDir: process.env.MIGRATIONS_PATH_FOR_BACKOFFICE
    },
    migrationsRun: true,
    synchronize: true,
    logging: true,
    entities: [
      process.env.ENTITIES_PATH_FOR_BACKOFFICE
    ]
  },
  {
    type: 'postgres',
    name: 'seeds-backoffice',
    host: process.env.BACKOFFICE_DB_HOST,
    port: parseInt(process.env.BACKOFFICE_DB_PORT, 10),
    username: process.env.BACKOFFICE_DB_USER,
    password: process.env.BACKOFFICE_DB_PASSWORD,
    database: process.env.BACKOFFICE_DB_DATABASE,
    migrations: [
      process.env.SEEDS_PATH_FOR_BACKOFFICE
    ],
    cli: {
      migrationsDir: process.env.SEEDS_PATH_FOR_BACKOFFICE
    },
    migrationsRun: true,
    synchronize: true,
    logging: true,
    entities: [
      process.env.ENTITIES_PATH_FOR_BACKOFFICE
    ]
  }
];

module.exports = config;
