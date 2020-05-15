import { Pool } from 'pg';

const db: Pool = new Pool({
    host: process.env.POSTGRESQL_HOST,
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
    port: process.env.POSTGRESQL_PORT ? parseInt(process.env.POSTGRESQL_PORT, 10) : 5432,
});

export default db;
