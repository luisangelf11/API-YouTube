import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'angel123',
    database: 'API_Estudiantes'
});

export default pool;