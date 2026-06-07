const app = require('./app');
const config = require('./config/env');
const sequelize = require('./config/database');

async function startServer() {
  await sequelize.sync();

  app.listen(config.port, () => {
    console.log(config.appMessage);
    console.log(`App name: ${config.appName}`);
    console.log(`Running on port: ${config.port}`);
  });
}

startServer();