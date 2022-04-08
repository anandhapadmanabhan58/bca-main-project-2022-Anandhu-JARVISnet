const ServiceProvider = require('../models/ServiceProvider');

const cablePlan = (req, res) => {
  const cablePlanDetails = {
    CplanName: req.body.CplanName,
    CserviceProvider:req.body.CserviceProvider,
  };
};
const serviceProvider = async (req, res) => {
  const serviceDetails = {
    serviceProvider: req.body.serviceProvider,
    availableService: req.body.availableService,
  };
  try {
    const service = ServiceProvider.create(serviceDetails);
    res.status(201).json({ status: 'success', data: service });
  } catch (err) {
    console.error(err);
  }
};
module.exports = { cablePlan, serviceProvider };
