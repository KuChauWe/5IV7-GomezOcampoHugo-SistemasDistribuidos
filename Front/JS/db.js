const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME
});



























pool("hola");