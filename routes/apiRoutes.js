const express = require('express');
const router = express.Router();
const {
  serviceProvider,
  cablePlan,
  broadbandPlan,
} = require('../controller/apiController');

//routes-API

router.post('/serviceProvider', serviceProvider);
router.post('/addCablePlan', cablePlan);
router.post('/addBroadbandPlan', broadbandPlan);

//exporting

module.exports = router;
