const {Pool} = require('pg');
const { pg_config } = require('./config.js');


const pool = new Pool({
    user: pg_config.user,
    password: pg_config.password,
    host: pg_config.host,
    port: pg_config.port,
    database: pg_config.database
});

module.exports = pool;