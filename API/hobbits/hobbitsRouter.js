const express = require('express');

const router = express.Router();

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


router.get('/', (req, res) => {
    res.status(200).json(hobbits)
})

router.get('/:id', (req, res) => {
const hobbit = hobbits.find(h => h.id == req.params.id)

    res.status(200).json(hobbit)
})

router.post('/', (req, res) => {
    const hobbit = req.body;

    hobbit.id = nextId++;

    hobbits.push(hobbit);

    res.status(201).json(hobbits)
})

router.put('/:id', (req, res) => {
    const hobbit = hobbits.find(h => h.id == req.params.id)

    if(!hobbit){
        res.status(404).json({message: "There is no Hobbit by that id"})
    } else {
    Object.assign(hobbit, req.body);
    res.status(200).json(hobbit)
    }
})

router.delete('/:id', (req, res) => {
    const hobbit = hobbits.find(h => h.id == req.params.id);

    if(!hobbit){
        res.status(404).json({message: "Could not find Hobbit"})
    } else {
        hobbits = hobbits.filter(h => h.id != req.params.id);
        res.status(200).json(hobbit);
    };
})



module.exports = router;