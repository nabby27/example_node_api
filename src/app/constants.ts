import mysql, { Pool } from 'mysql';

const db: Pool = mysql.createPool({
    connectionLimit : 100,
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'CMS',
});

export default db;
