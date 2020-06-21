// =========== Imports ===========
const express = require('express');

const Hobbits = require('../../data/dbHelper');



// ============================================ ****** HOBBITS C.R.U.D. ****** ============================================
const router = express.Router();

// =========== GET Hobbits ===========
router.get('/', (req, res) => {
    Hobbits.findHobbits()
        .then(hobbits => {
            res.status(200).json(hobbits)
        })
        .catch(err => {
            res.status(500).json({ message: "ERROR failed to get hobbit", errorMessage: err })
        })
})

// =========== GET Hobbit by id ===========
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Hobbits.findHobbitById(id)
        .then(hobbit => {
            if (hobbit) {
                res.status(200).json(hobbit)
            } else {
                res.status(404).json({ message: "hobbit not found" })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "ERROR failed to get hobbit", errorMessage: err })
        })
})

// =========== POST Hobbit ===========
router.post('/', (req, res) => {
    const hobbitData = req.body;

    Hobbits.add(hobbitData)
        .then(hobbit => {
            res.status(201).json(hobbit)
        })
        .catch(err => {
            res.status(500).json({ message: "ERROR failed to create new hobbit", errorMessage: err })
        })
})

// =========== PUT Hobbit ===========
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Hobbits.findHobbitById(id)
        .then(hobbit => {
            if (!hobbit) {
                res.status(404).json({ messaage: "Could not find hobbit with give id" })
            } else {
                Hobbits.update(changes, id)
                    .then(updatedHobbit => res.status(200).json(updatedHobbit))
            }
        })
        .catch(err => {
            res.status(500).json({ message: "ERROR failed to update hobbit", errorMessage: err })
        })
})

// =========== DELETE Hobbit ===========
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Hobbits.remove(id)
        .then(hobbit => {
            if (!hobbit) {
                res.status(404).json({ message: "Could not find Hobbit" })
            } else {
                res.status(200).json({ removed: `hobbit ${id} 😥` });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "ERROR failed to get hobbit", errorMessage: err })
        })
})



module.exports = router;