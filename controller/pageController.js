//models

const ServiceProvider = require('../models/ServiceProvider');

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
module.exports = {
  home,
  addCablePlans,
  addBroadbandPlans,
  addServiceProvider,
  about,
  viewsProvider,
};
