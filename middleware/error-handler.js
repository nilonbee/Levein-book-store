const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    msg: err.message || "Something went wrong...please try again later",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  if (err.name === "ValidationError") {
    customError.msg = `${Object.values(err.errors)
      .map((item) => item.message)
      .join(",")}`;
    customError.statusCode = 400;
  }

  if (err.code && err.code === 11000) {
    (customError.msg = `The value entered for the ${Object.keys(
      err.keyValue
    )} is duplicated please choose another value...`),
      (customError.statusCode = 400);
  }

  if (err.name === "CastError") {
    customError.msg = `no record found with the id: ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
