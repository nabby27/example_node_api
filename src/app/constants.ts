import mysql, { Pool } from 'mysql';

const db: Pool = mysql.createPool({
    connectionLimit : 100,
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'EXAMPLE',
});

export default db;
