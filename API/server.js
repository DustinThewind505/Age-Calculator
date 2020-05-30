const express = require('express');

const apiRoutes = require('./apiRoutes');

const server = express();
server.use(express.json());

server.use('/api', apiRoutes);

server.get('/', (req, res) => {
    res.send('<img src="http://3.bp.blogspot.com/-nY7RCflMJOk/TdVR-JHjEyI/AAAAAAAAAC8/D0tVTHeksow/s1600/Powerman_5000_umvd01.jpg"/>');
});

module.exports = server;