const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;
  console.log(statusCode);
  switch (statusCode) {
    case constants.VALIDATION_ERROR: {
      res.json({
        title: "Validation failed",
        message: err.message,
        stack: err.stack,
      });
      break;
    }
    case constants.UNAUTHORIZED: {
      res.json({
        title: "Unauthorized access",
        message: err.message,
        stack: err.stack,
      });
      break;
    }
    case constants.FORBIDDEN: {
      res.json({
        title: "Forbidden request",
        message: err.message,
        stack: err.stack,
      });
      break;
    }
    case constants.NOT_FOUND: {
      res.json({
        title: "404 Not Found",
        message: err.message,
        stack: err.stack,
      });
      break;
    }
    case constants.SERVER_ERROR: {
      res.json({
        title: "500 Internal server error",
        message: err.message,
        stack: err.stack,
      });
      break;
    }
    default: {
      res.json({ message: "All good, no error found" });
    }
  }
};
module.exports = errorHandler;
