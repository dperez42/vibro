const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {server_config} =require('./config');
const router_sensors = require('./routes/routes_sensors');

const app = express();

const port = process.env.port || server_config.port;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//Api routes
app.use('/API/v0/sensors', router_sensors)

app.listen(port, () => console.log('Listening on localhost:'+port));  // message on screen