const express = require('express');
const router = express.Router();

router.use('/countries', require('./countries'));   // список стран
router.use('/country', require('./country'));       // одна страна

module.exports = router;
