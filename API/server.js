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

server.get('/ello/:id', (req, res) => {
const hobbit = hobbits.find(h => h.id == req.params.id)

    res.status(200).json(hobbit)
})

server.post('/ello', (req, res) => {
    const hobbit = req.body;

    hobbit.id = nextId++;

    hobbits.push(hobbit);

    res.status(201).json(hobbits)
})

server.put('/ello/:id', (req, res) => {
    const hobbit = hobbits.find(h => h.id == req.params.id)

    if(!hobbit){
        res.status(404).json({message: "There is no Hobbit by that id"})
    } else {
    Object.assign(hobbit, req.body);
    res.status(200).json(hobbit)
    }
})

server.delete('/ello/:id', (req, res) => {

    res.status(200).json({message: "DELETE"})
})


module.exports = server;