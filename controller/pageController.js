//models

const ServiceProvider = require('../models/ServiceProvider');
const BroadbandPlan = require('../models/BroadbandPlan');

const home = (req, res) => {
  res.render('admin/home');
};
const addCablePlans = (req, res) => {
  res.render('admin/addCablePlans');
};
const addBroadbandPlans = (req, res) => {
  res.render('admin/addBroadbandPlans');
};

//add service provider

const addServiceProvider = (req, res) => {
  res.render('admin/addServiceProvider');
};

//about Page

const about = (req, res) => {
  res.render('admin/about');
};

//view service provider

const viewsProvider = async (req, res) => {
  const providers = await ServiceProvider.find((err, doc) => {
    res.render('admin/PlansAndServiceView/viewProvider', {
      sp: doc,
    });
    if (err) {
      console.error(err);
    }
  }).clone();
};

const viewbroadband = async (req, res) => {
  const serviceProvider = req.params.serviceProvider;
  try {
    const query = await BroadbandPlan.find({})
      .where('BserviceProvider')
      .equals(serviceProvider);
    res.render('admin/PlansAndServiceView/viewBroadbandPlans', {
      sp: query,
    });
  } catch (err) {
    console.error(err);
  }
};
module.exports = {
  home,
  addCablePlans,
  addBroadbandPlans,
  addServiceProvider,
  about,
  viewsProvider,
  viewbroadband,
};
