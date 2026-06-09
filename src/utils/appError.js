const HTTP_STATUS = require('../constants/httpStatus');

class AppError extends Error {
  constructor(message, statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, cause = null) {
    super(message);
    this.statusCode = statusCode;
    this.cause = cause;
  }
}

module.exports = AppError;