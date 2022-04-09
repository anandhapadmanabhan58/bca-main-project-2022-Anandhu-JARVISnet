const express = require('express');
const router = express.Router();
const {
  serviceProvider,
  cablePlan,
  broadbandPlan,
  deleteBroadband,
} = require('../controller/apiController');

//routes-API

router.post('/serviceProvider', serviceProvider);
router.post('/addCablePlan', cablePlan);
router.post('/addBroadbandPlan', broadbandPlan);
router.post('/deleteBroaband/:id', deleteBroadband);
//exporting

module.exports = router;
