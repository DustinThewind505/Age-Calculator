const express = require('express');

const hobbitRoutes = require('./hobbits/hobbitRoutes');

const humanRoutes = require('./humans/humansRoutes');

const server = express();

server.use(express.json());

// ====== Custom Middleware ======
function logger(req, res, next){
    console.log(`[${new Date().toISOString()} ] ${req.method} to ${req.url} ${req.get('Origin')}`);
    next();
}

function atTheGate(req, res, next){
    console.log('At the gate, about to be eaten');
    next();
}

function auth(req, res, next){
    if(req.url === '/mellon'){
        next()
    } else (
        res.send('You shall not pass!!!')
    )
}

server.use(logger);
server.use(atTheGate);
// server.use(auth);

server.get('/mellon', auth, (req, res) => {
    console.log('Gate opening...');
    console.log('Inside and safe');
    res.send("Welcome to Moria!!!")
})

server.use('/hobbits', hobbitRoutes);
server.use('/humans', humanRoutes);

server.use(function(req, res) {
    res.status(404).send('Aint no hobbits got time for that!')
})

server.listen(8000, () => console.log('\n\t\t\t\t\t\t\t\t*** API running on port 8000 ***\n'))
