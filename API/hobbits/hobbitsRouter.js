const express = require('express');

const Hobbits = require('../../data/dbHelper');

const router = express.Router();

// let hobbits = [
//     {
//       id: 1,
//       name: 'Bilbo Baggins',
//       age: 111,
//     },
//     {
//       id: 2,
//       name: 'Frodo Baggins',
//       age: 33,
//     },
//   ];
  let nextId = 3;


router.get('/', (req, res) => {
    Hobbits.findHobbits()
    .then(hobbits => {
        res.status(200).json(hobbits)
    })
    .catch(err => {
        res.status(500).json({ message: "ERROR failed to get hobbit", errorMessage: err })
    })
})

router.get('/:id', (req, res) => {
    Hobbits.findHobbitById(req.params.id)
    .then(hobbit => {
        if(hobbit){
            res.status(200).json(hobbit)
        } else {
            res.status(404).json({ message: "hobbit not found" })
        }
    })
    .catch(err => {
        res.status(500).json({ message: "ERROR failed to get hobbit", errorMessage: err })
    })
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