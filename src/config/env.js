const dotenv = require('dotenv');

const environment = process.env.NODE_ENV || 'dev';

dotenv.config({
  path: `.env.${environment}`
});

const config = {
  environment,
  port: process.env.PORT || 8080,
  appName: process.env.APP_NAME || 'customers-dev',
  appMessage: process.env.APP_MESSAGE || 'Ejecutando en DEV'
};

module.exports = config;