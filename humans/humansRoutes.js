const express = require('express');

const router = express.Router();

const humans = ["Dustin", "Aragon", "Boramir"];


router.get('/', (req, res) => {

    res.status(200).json(humans[0])
})



module.exports = router;