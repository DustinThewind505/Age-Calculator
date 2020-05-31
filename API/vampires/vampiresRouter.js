const express = require('express');

const router = express.Router();

let vampires = [
    {
        id: 1,
        name: "Blade",
        dayWalker: true
    },
    {
        id: 2,
        name: "Edward Cullins",
        dayWalker: true
    },
    {
        id: 3,
        name: "Dustin Guillen",
        dayWalker: true
    }
];
let nextId = 4;

router.get('/', (req, res) => {
    res.status(200).json(vampires);
});

router.get('/:id', (req, res) => {
    const vampire = vampires.find(v => v.id == req.params.id);
    res.status(200).json(vampire);
});

router.post('/', (req, res) => {
    const vampire = req.body;

    vampire.id = nextId++;

    vampires.push(vampire);
    res.status(201).json(vampires)
})

router.put('/:id', (req, res) => {
    const vampire = vampires.find(v => v.id == req.params.id);

    if(!vampire){
        res.status(404).json({message: 'Vampire not found'})
    } else {
        Object.assign(vampire, req.body);
        res.status(200).json(vampire)
    }
})

router.delete('/:id', (req, res) => {
    const vampire = vampires.find(v => v.id == req.params.id);

    if(!vampire){
        res.status(404).json({message: "Could not find vampire"})
    } else {
        vampires = vampires.filter(v => v.id != req.params.id);
        res.status(200).json(vampire)
    }
    
})


module.exports = router;