const express = require('express');
const morgan = require('morgan');


const apiRoutes = require('./apiRoutes');

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(logger);


server.use('/api', apiRoutes);

server.use('/', (req, res) => {
    res.status(404).send('<div style="padding:15% 0 5%;background-color:black;display: flex;flex-direction: column;align-items:center;"><h1 style="color:lawngreen;font-size:46px;">404 could not find page</h1><img src="http://3.bp.blogspot.com/-nY7RCflMJOk/TdVR-JHjEyI/AAAAAAAAAC8/D0tVTHeksow/s1600/Powerman_5000_umvd01.jpg"/></div>');
});

module.exports = server;

function logger(req, res, next){
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}

function auth(req, res, next){
    if(req.url === '/mellon'){
        next()
    } else {
        res.send('You shall not pass!')
    }
}