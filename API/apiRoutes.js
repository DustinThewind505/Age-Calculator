const express = require('express');

const hobbitsRouter = require('./hobbits/hobbitsRouter');
const xmenRouter = require('./xmen/xmenRouter');
const vampiresRouter = require('./vampires/vampiresRouter');

const router = express.Router();

router.use('/hobbits', hobbitsRouter);
router.use('/xmen', xmenRouter);
router.use('/vampires', vampiresRouter);

const users = [];

let nextID = 1;

router.get('/register', (req, res) => {
    res.status(200).json(users)
})

router.post('/register', (req, res) => {
    const user = req.body;

    user.id = nextID++;

    users.push(user);

    res.status(201).json(users)
})

router.post('/login', (req, res) => {
    const dude = req.body
    const user = users.find(u => u.name == dude.name);
    dude.id = user.id;

    console.log(user)
    console.log(dude)

    // res.status(200).json({ message: `Welcome ${user.name}` })
    
    if (user.password == dude.password) {
        res.status(200).json({ message: `Welcome ${user.name}` })
    } else {
        res.status(404).json({ message: `Invalid credentials` })
    }



})

module.exports = router;