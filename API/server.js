const express = require('express');

const server = express();
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({message: 'Ello Poppet'})
})

server.get('/ello', (req, res) => {
    res.status(200).send('<h1>Ello Poppet</h1>')
})

module.exports = server;