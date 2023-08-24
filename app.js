const express = require("express");
const app = express();
const PORT = 8000;
const mainRouter = require("./routes/routes");
const connectDb = require("./db/connect");
require("dotenv").config();
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
// const rateLimiter = require("express-rate-limit");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());
app.use("/api/v1", mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      `App ls listening on port ${process.env.PORT}...`;
    });
  } catch (error) {
    console.log(error);
  }
};

start();
