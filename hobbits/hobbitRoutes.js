const express = require('express');

const router = express.Router();

let hobbits = [
    {
        "name": "Frodo",
        "id": 1
    },
    {
        "name": "Bilbo",
        "id": 2
    },
    {
        "name": "Smegal",
        "id": 3
    },
    {
        "name": "Samwise",
        "id": 4
    }
];

let ids = 4

router.get('/', (req, res) => {
    const sortField = req.query.sortby || 'id';
    console.log(req.query)

    const response = hobbits.sort(
        (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
      );
    
      res.status(200).json(response);
})

router.post('/', (req, res) => {
    const newHobbit = req.body;
    
    newHobbit.id = ++ids

    hobbits.push(newHobbit);

    res.status(201).json(newHobbit);
})

router.put('/:id', (req, res) => {
    const hobbit = hobbits.find(element => element.id == req.params.id);

    if(!hobbit){
        res.status(404).json({message: 'Hobbit not found'});
    } else {
        Object.assign(hobbit, req.body);
        res.status(200).json(hobbit)
    }

    res.status(200).json({url: "hobbits", operation: "PUT"})
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params)

    res.status(200).json({
        url: `/hobbits/${id}`,
        operation: `DELETE hobbit with id ${id}`
    })
})

module.exports = router;