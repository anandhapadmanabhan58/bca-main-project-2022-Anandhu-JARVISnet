const express = require('express');
const router = express.Router();
const {
  home,
  addCablePlans,
  addBroadbandPlans,
  addServiceProvider,
  about,
  viewsProvider,
  viewbroadband,
} = require('../controller/pageController');

//routes

router.get('', home);
router.get('/addCablePlans', addCablePlans);
router.get('/addBroadbandPlans', addBroadbandPlans);
router.get('/addServiceProvider', addServiceProvider);
router.get('/about', about);
router.get('/viewServiceProvider', viewsProvider);
router.get('/viewbroadbandPlan/:serviceProvider', viewbroadband);

//exporting router
module.exports = router;
