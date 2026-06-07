const express = require('express');
const customerController = require('../controllers/customer.controller');

const router = express.Router();

router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);

module.exports = router;