const express = require('express');

const server = express();
server.use(express.json())

let hobbits = [
    {
      id: 1,
      name: 'Bilbo Baggins',
      age: 111,
    },
    {
      id: 2,
      name: 'Frodo Baggins',
      age: 33,
    },
  ];
  let nextId = 3;

server.get('/', (req, res) => {
    res.status(200).json({message: 'Ello Poppet'})
})

server.get('/ello', (req, res) => {
    res.status(200).json(hobbits)
})

server.post('/ello', (req, res) => {
    const hobbit = req.body;

    hobbit.id = nextId++;

    hobbits.push(hobbit);

    res.status(201).json(hobbits)
})

server.put('/ello', (req, res) => {
    res.status(201).json({message: "PUT Hobbits"})
})

server.delete('/ello', (req, res) => {
    res.status(200).json({message: "DELETE"})
})


module.exports = server;