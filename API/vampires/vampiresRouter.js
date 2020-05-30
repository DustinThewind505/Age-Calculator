const express = require('express');

const router = express.Router();

const vampires = [
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
]

router.get('/', (req, res) => {
    res.status(200).json(vampires)
})


module.exports = router;