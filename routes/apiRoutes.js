const express = require('express');
const router = express.Router();
const { serviceProvider, cablePlan } = require('../controller/apiController');

//routes-API

router.post('/serviceProvider', serviceProvider);
router.post('/addCablePlan', cablePlan);

//exporting

module.exports = router;
