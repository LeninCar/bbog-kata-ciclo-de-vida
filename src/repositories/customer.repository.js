const Customer = require('../models/customer.model');

function save(customerData) {
  return Customer.create(customerData);
}

function findAll() {
  return Customer.findAll();
}

module.exports = {
  save,
  findAll
};