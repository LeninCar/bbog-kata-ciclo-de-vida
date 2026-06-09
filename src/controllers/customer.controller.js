const customerService = require('../services/customer.service');
const HTTP_STATUS = require('../constants/httpStatus');
const MESSAGES = require('../constants/messages');

async function createCustomer(req, res) {
  try {
    const customer = await customerService.createCustomer(req.body);

    return res.status(HTTP_STATUS.CREATED).json({
      message: MESSAGES.CUSTOMER_CREATED,
      data: customer
    });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error.message || MESSAGES.INTERNAL_SERVER_ERROR
    });
  }
}

async function getCustomers(req, res) {
  try {
    const customers = await customerService.getCustomers();

    return res.status(HTTP_STATUS.OK).json({
      message: MESSAGES.CUSTOMERS_RETRIEVED,
      data: customers
    });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error.message || MESSAGES.INTERNAL_SERVER_ERROR
    });
  }
}

module.exports = {
  createCustomer,
  getCustomers
};