const customerRepository = require('../repositories/customer.repository');
const AppError = require('../utils/appError');
const HTTP_STATUS = require('../constants/httpStatus');
const MESSAGES = require('../constants/messages');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function createCustomer(customerData) {
  const { name, email } = customerData;
  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (!name) {
    throw new AppError(MESSAGES.NAME_REQUIRED, HTTP_STATUS.BAD_REQUEST);
  }

  if (!nameRegex.test(name)) {
    throw new AppError(MESSAGES.NAME_INVALID, HTTP_STATUS.BAD_REQUEST);
  }

  if (!email) {
    throw new AppError(MESSAGES.EMAIL_REQUIRED, HTTP_STATUS.BAD_REQUEST);
  }

  if (!isValidEmail(email)) {
    throw new AppError(MESSAGES.EMAIL_INVALID, HTTP_STATUS.BAD_REQUEST);
  }

  return customerRepository.save({ name, email });
}

async function getCustomers() {
  return customerRepository.findAll();
}

module.exports = {
  createCustomer,
  getCustomers,
};