const router = require('express').Router();

const notes = require('./router');

router.use('/notes', notes);

module.exports = router;