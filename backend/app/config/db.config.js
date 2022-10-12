const {Pool}  = require('pg');


const pool =new Pool({
    user: 'root',
    password:'root2022',
    host:'localhost',
    port: 5432,
    database:'farmacia',
   
});

module.exports = pool;