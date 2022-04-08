const home = (req, res) => {
  res.render('admin/home');
};
const addCablePlans = (req, res) => {
  res.render('admin/addCablePlans');
};
const addBroadbandPlans = (req, res) => {
  res.render('admin/addBroadbandPlans');
};
const addServiceProvider = (req, res) => {
  res.render('admin/addServiceProvider');
};
const about = (req, res) => {
  res.render('admin/about');
};
module.exports = {
  home,
  addCablePlans,
  addBroadbandPlans,
  addServiceProvider,
  about,
};
