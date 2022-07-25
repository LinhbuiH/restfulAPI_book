const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();
const PORT = process.env.port;
const Data = 'book.json';
const router = require('./src/router');

/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());*/

app.get('/book',(req,res) => {
    res.send(Data)
})

app.use(router);


console.log(`Starting server on port ${PORT}` );
