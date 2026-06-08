class AppError extends Error {
  constructor(message, statusCode = 500, cause = null) {
    super(message);
    this.statusCode = statusCode;
    this.cause = cause;
  }
}

module.exports = AppError;