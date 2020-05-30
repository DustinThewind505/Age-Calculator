const express = require('express');

const hobbitsRouter = require('../hobbits/hobbitsRouter');

const server = express();
server.use(express.json());

server.use('/hobbits', hobbitsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'Ello Poppet'})
});

module.exports = server;