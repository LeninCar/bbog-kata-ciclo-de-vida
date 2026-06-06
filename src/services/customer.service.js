const customerRepository = require('../repositories/customer.repository');

async function createCustomer(customerData) {
  const { name, email } = customerData;

  if (!name || !email) {
    const error = new Error('Name and email are required');
    error.statusCode = 400;
    throw error;
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