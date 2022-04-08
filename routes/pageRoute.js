const express = require('express');
const router = express.Router();
const {
  home,
  addCablePlans,
  addBroadbandPlans,
  addServiceProvider,
  about,
} = require('../controller/pageController');

//routes

router.get('', home);
router.get('/addCablePlans', addCablePlans);
router.get('/addBroadbandPlans', addBroadbandPlans);
router.get('/addServiceProvider', addServiceProvider);
router.get('/about', about);

//exporting router
module.exports = router;
