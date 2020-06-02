const express = require('express');
const morgan = require('morgan');


const apiRoutes = require('./apiRoutes');

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(logger);
//server.use(atTheGate);

server.use('/api', apiRoutes);

server.get('/mellon', auth, (re, res, next) => {
    console.log('Gates opening...');
    console.log('Insinde and safe');
    res.send('<h1 style="text-align:center;">Welcome travelers</h1><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dca0a0d-9fbe-4442-9f5e-627633ddad33/d4pmns8-d58c8005-a5fd-4512-abde-613677ca402e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi84ZGNhMGEwZC05ZmJlLTQ0NDItOWY1ZS02Mjc2MzNkZGFkMzMvZDRwbW5zOC1kNThjODAwNS1hNWZkLTQ1MTItYWJkZS02MTM2NzdjYTQwMmUuanBnIn1dXX0.Wf6D1Nd8sdw22P09mdIqzAZOt6blFMHQnANryLomlKA"/>')
})

server.use('/', (req, res) => {
    res.status(404).send('<div style="padding:15% 0 5%;background-color:black;display: flex;flex-direction: column;align-items:center;"><h1 style="color:lawngreen;font-size:46px;">404 could not find page</h1><img src="http://3.bp.blogspot.com/-nY7RCflMJOk/TdVR-JHjEyI/AAAAAAAAAC8/D0tVTHeksow/s1600/Powerman_5000_umvd01.jpg"/></div>');
});

module.exports = server;

function logger(req, res, next){
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}

// function atTheGate(req, res, next){
//     console.log("At the gate about to be eaten");
//     next();
// }

function auth(req, res, next){
    if(req.url === '/mellon'){
        next()
    } else {
        res.send('You shall not pass!')
    }
}