'use strict';

const mySQL = require("mysql");


const pool = mySQL.createPool({
  connectionLimit: 50,
  port: '3307',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bicicu'
});



module.exports = pool;
