const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/config/database');
const Customer = require('../src/models/customer.model');

const HTTP_STATUS = require('../src/constants/httpStatus');
const MESSAGES = require('../src/constants/messages');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  await Customer.destroy({ where: {} });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer API', () => {
  test('should return API status', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(HTTP_STATUS.OK);
    expect(response.body.message).toBe(MESSAGES.API_RUNNING);
  });

  test('should create a customer', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: 'Juan Perez',
        email: 'juan@email.com'
      });

    expect(response.statusCode).toBe(HTTP_STATUS.CREATED);
    expect(response.body.message).toBe(MESSAGES.CUSTOMER_CREATED);
    expect(response.body.data.name).toBe('Juan Perez');
    expect(response.body.data.email).toBe('juan@email.com');
  });

  test('should list customers', async () => {
    await request(app)
      .post('/api/customers')
      .send({
        name: 'Juan Perez',
        email: 'juan@email.com'
      });

    const response = await request(app).get('/api/customers');

    expect(response.statusCode).toBe(HTTP_STATUS.OK);
    expect(response.body.data.length).toBe(1);
  });

  test('should return 400 when name is missing', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        email: 'juan@email.com'
      });

    expect(response.statusCode).toBe(HTTP_STATUS.BAD_REQUEST);
    expect(response.body.message).toBe(MESSAGES.NAME_REQUIRED);
  });

  test('should return 400 when email is missing', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: 'Juan Perez'
      });

    expect(response.statusCode).toBe(HTTP_STATUS.BAD_REQUEST);
    expect(response.body.message).toBe(MESSAGES.EMAIL_REQUIRED);
  });

  test('should return 400 when email format is invalid', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: 'Juan Perez',
        email: 'juan'
      });

    expect(response.statusCode).toBe(HTTP_STATUS.BAD_REQUEST);
    expect(response.body.message).toBe(MESSAGES.EMAIL_INVALID);
  });
});