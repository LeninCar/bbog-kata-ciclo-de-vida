const express = require('express');
const cors = require('cors');
const config = require("./config/env")
const customerRoutes = require('./routes/customer.routes');
const HTTP_STATUS = require('./constants/httpStatus');
const MESSAGES = require('./constants/messages');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: MESSAGES.API_RUNNING
  });
});

app.get('/health', (req, res) => {
  res.status(HTTP_STATUS.OK).json({
    status: MESSAGES.HEALTH_UP,
    environment: config.environment,
    appName: config.appName,
    appMessage: config.appMessage,
  });
});

app.use('/api/customers', customerRoutes);

module.exports = app;