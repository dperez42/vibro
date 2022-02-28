const { Router } = require('express');
const {data} = require('../controllers/controllers_sensors');

const router_sensors = Router();

// routes
router_sensors.post('/data', data);

//router_user.get('/', getAll);
//user_chat.get('/actual', getActual);
//router_user.get('/user/', getById);
//user_chat.get('/user/', getByUser);
//user_chat.post('/register', create);
//user_chat.delete('/', erase);
//user_chat.put('/:chat_id', update);
//router_message.post('/chat/create', create);

module.exports = router_sensors;