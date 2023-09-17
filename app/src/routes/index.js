const express = require('express');

const router = express.Router();

const ctrl = require('./ctrl');

router.get('/', ctrl.index);
router.get('/index', ctrl.home);

module.exports = router;
