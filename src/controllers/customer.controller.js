const customerService = require('../services/customer.service');

async function createCustomer(req, res) {
  try {
    const customer = await customerService.createCustomer(req.body);

    return res.status(201).json({
      message: 'Customer created successfully',
      data: customer
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || 'Internal server error'
    });
  }
}

async function getCustomers(req, res) {
  try {
    const customers = await customerService.getCustomers();

    return res.status(200).json({
      message: 'Customers retrieved successfully',
      data: customers
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || 'Internal server error'
    });
  }
}

module.exports = {
  createCustomer,
  getCustomers
};