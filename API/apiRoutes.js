const express = require('express');

const hobbitsRouter = require('./hobbits/hobbitsRouter');
const xmenRouter = require('./xmen/xmenRouter');
const vampiresRouter = require('./vampires/vampiresRouter');

const router = express.Router();

router.use('/hobbits', hobbitsRouter);
router.use('/xmen', xmenRouter);
router.use('/vampires', vampiresRouter);

module.exports = router;