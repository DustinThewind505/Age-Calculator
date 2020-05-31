const express = require('express');

const router = express.Router();

let xmen = [
    {
        id: 1,
        name: "Cyclops",
        ability: "Laser portal eyes"
    },
    {
        id: 2,
        name: "Jean Gray",
        ability: "Telekenesis"
    },
    {
        id: 3,
        name: "Storm",
        ability: "Controls the elements"
    }
]
let nextId = 4;

router.get('/', (req,res) => {
    res.status(200).json(xmen)
})

router.get('/:id', (req, res) => {
    const mutant = xmen.find(x => x.id == req.params.id)
    res.status(200).json(mutant);
})

router.post('/', (req, res) => {
    const mutant = req.body;

    mutant.id = nextId++;

    xmen.push(mutant);

    res.status(201).json(xmen);
})

router.put('/:id', (req, res) => {
    const mutant = xmen.find(x => x.id == req.params.id);

    if(!mutant){
        res.status(404).json({message: "Could not find mutant"});
    } else {
        Object.assign(mutant, req.body);
        res.status(200).json(mutant);
    }
})

router.delete('/:id', (req, res) => {
    const mutant = xmen.find(x => x.id == req.params.id);

    if(!mutant){
        res.status(404).json({message: "Could not find mutant"})
    } else {
        xmen = xmen.filter(x => x.id != req.params.id);
        res.status(200).json(mutant);
    }

})

module.exports = router;