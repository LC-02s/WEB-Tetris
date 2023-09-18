const express = require('express');

const router = express.Router();

const ctrl = require('./index.ctrl');

router.get('/', ctrl.index);
router.get('/index', ctrl.home);

module.exports = router;
