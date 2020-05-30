const express = require('express');

const hobbitsRouter = require('../hobbits/hobbitsRouter');

const router = express.Router();

router.use('/hobbits', hobbitsRouter);

module.exports = router;