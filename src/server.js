const app = require('./app');
const config = require('./config/env');

app.listen(config.port, () => {
  console.log(`${config.appMessage}`);
  console.log(`App name: ${config.appName}`);
  console.log(`Running on port: ${config.port}`);
});