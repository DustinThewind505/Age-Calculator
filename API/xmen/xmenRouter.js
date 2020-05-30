const express = require('express');

const router = express.Router();

const xmen = [
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

router.get('/', (req,res) => {
    res.status(200).json(xmen)
})

module.exports = router;