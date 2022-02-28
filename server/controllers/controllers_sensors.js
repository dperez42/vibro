const pgpool = require('../postgres');

//http://localhost:4000/API/v0/sensors/data
const data = async (req, res, next) => {
    console.log(req.body);
    const myJSON = JSON.stringify(req.body);
    try {
        //const result = await pgpool.query('SELECT \
        // NOW()')
        const result = await pgpool.query('SELECT public.parse_json_data($1)', [myJSON] );
        //const result = await pgpool.query('SELECT * FROM users')
        console.log(result)
        //res.status(200);
        res.json(result.rowCount);
    } catch (error) {
        console.log(error.message);
        next(error);
        //res.json({error: error.message});
    }
}

module.exports = {
    data
}

/*
const getAll = async (req, res, next) => {
    console.log('get All users');
    try {
        //const result = await pgpool.query('SELECT NOW()')
        const result = await pgpool.query('SELECT * FROM users')
        console.log(result)
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        next(error);
        //res.json({error: error.message});
    }
}

const getById = async (req, res, next) => {
    console.log('get users by id', req.params);
    try {
        let user_id = req.query.user_id;
        const result = await pgpool.query('SELECT * FROM users where user_id = $1', [user_id])
        if (result.rows.length === 0)
            next('user not found');
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
        next(error);
    }
}

const create = async (req, res, next) => {
    console.log('create new message');
    const {chat_id, user_id, message_body}  = req.body;
    console.log('create user - chat',chat_id, user_id );
    try {
        const result = await pgpool.query(
            'INSERT INTO chats_messages (chat_id, user_id,  message_body, message_create) VALUES ($1, $2, $3, now())  RETURNING *',
            [chat_id, user_id, message_body]);
        console.log(result, chat_id, user_id, message_body );
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
        next(error.message);
    }
    //CREATE ADMINISTRATOR USER
}

module.exports = {
    getAll,
    getById
}
*/