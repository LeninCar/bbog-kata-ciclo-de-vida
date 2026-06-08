const customerRepository = require('../repositories/customer.repository');
const AppError = require('../utils/appError');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function createCustomer(customerData) {
  const { name, email } = customerData;
  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (!name) {
    throw new AppError('Name is required', 400);
  }

  if (!nameRegex.test(name)) {
    throw new AppError('Name contains invalid characters', 400);
  }

  if (!email) {
    throw new AppError('Email is required', 400);
  }

  if (!isValidEmail(email)) {
    throw new AppError('Email format is invalid', 400);
  }

  return customerRepository.save({
    name,
    email
  });
}

async function getCustomers() {
  return customerRepository.findAll();
}

module.exports = {
  createCustomer,
  getCustomers
};