const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Ello Poppet')
})



module.exports = server;