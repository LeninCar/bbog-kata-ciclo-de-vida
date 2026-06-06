const express = require('express');
const cors = require('cors');

const customerRoutes = require('./routes/customer.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Customers API is running'
  });
});

app.use('/api/customers', customerRoutes);

module.exports = app;