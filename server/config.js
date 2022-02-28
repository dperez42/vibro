const {config} = require('dotenv')
config({path:__dirname+'\\.env'})     //ruta donde esta .env

//console.log(process.env.PG_DB_PASSWORD)
//console.log(__dirname+'\\.env')

module.exports = {
    pg_config: {
        user: process.env.PG_DB_USER,
        password: process.env.PG_DB_PASSWORD,
        host: process.env.PG_DB_HOST,
        port: process.env.PG_DB_PORT,
        database: process.env.PG_DB_DATABASE,
    },
    server_config: {
        port: process.env.SERVER_PORT,
    }
}