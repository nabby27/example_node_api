// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const DEFAULT_BACKOFFICE_DB_PORT = 5432;

module.exports = [
  {
    type: 'postgres',
    name: 'backoffice',
    host: process.env.BACKOFFICE_DB_HOST,
    port: parseInt(process.env.BACKOFFICE_DB_PORT, 10) || DEFAULT_BACKOFFICE_DB_PORT,
    username: process.env.BACKOFFICE_DB_USER,
    password: process.env.BACKOFFICE_DB_PASSWORD,
    database: process.env.BACKOFFICE_DB_DATABASE,
    migrations: ['src/databases/backoffice/migrations/*.ts'],
    cli: {
      migrationsDir: './src/databases/backoffice/migrations'
    },
    migrationsRun: true,
    synchronize: true,
    logging: true,
    entities: ['src/**/backoffice/**/typeORM/*Entity.ts']
  },
  {
    type: 'postgres',
    name: 'seeds-backoffice',
    host: process.env.BACKOFFICE_DB_HOST,
    port: parseInt(process.env.BACKOFFICE_DB_PORT, 10) || DEFAULT_BACKOFFICE_DB_PORT,
    username: process.env.BACKOFFICE_DB_USER,
    password: process.env.BACKOFFICE_DB_PASSWORD,
    database: process.env.BACKOFFICE_DB_DATABASE,
    migrations: ['src/databases/backoffice/seeds/*.ts'],
    cli: {
      migrationsDir: './src/databases/backoffice/seeds'
    },
    migrationsRun: true,
    synchronize: true,
    logging: true,
    entities: ['src/**/backoffice/**/typeORM/*Entity.ts']
  }
];
