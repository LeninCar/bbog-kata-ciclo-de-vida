const express = require('express');
const cors = require('cors');
const config = require("./config/env")
const customerRoutes = require('./routes/customer.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Customers API is running'
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    environment: config.environment,
    appName: config.appName,
    appMessage: config.appMessage,
  })
})

app.use('/api/customers', customerRoutes);

module.exports = app;