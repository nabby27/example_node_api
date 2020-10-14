import { Pool } from 'pg';

const DEFAULT_BACKOFFICE_DB_PORT = 5432;

const db: Pool = new Pool({
  host: process.env.BACKOFFICE_DB_HOST,
  user: process.env.BACKOFFICE_DB_USER,
  password: process.env.BACKOFFICE_DB_PASSWORD,
  database: process.env.BACKOFFICE_DB_DATABASE,
  port: process.env.BACKOFFICE_DB_PORT ? parseInt(process.env.BACKOFFICE_DB_PORT, 10) : DEFAULT_BACKOFFICE_DB_PORT
});

export default db;
