const express = require('express');
const morgan = require('morgan');
const path = require('path');


const apiRoutes = require('./apiRoutes');

const server = express();
server.use(express.json());
server.use(morgan('dev'));
// server.use(logger);


server.use('/api', apiRoutes);

// server.use('/', (req, res) => {
//     res.status(404).send('<div style="padding:15% 0 5%;background-color:black;display: flex;flex-direction: column;align-items:center;"><h1 style="color:lawngreen;font-size:46px;">404 could not find page</h1><img src="http://3.bp.blogspot.com/-nY7RCflMJOk/TdVR-JHjEyI/AAAAAAAAAC8/D0tVTHeksow/s1600/Powerman_5000_umvd01.jpg"/></div>');
// });



// ======== 404 Page ========
server.use('/', (req, res, next) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath, err => {
        if (err) {
            next(err)
        } else {
            console.log("file sent successfully");
        }
    });
});

// ======== error handling middleware ========
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'There was an error performing the required operation',
        error: err
    })
})

module.exports = server;

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}
