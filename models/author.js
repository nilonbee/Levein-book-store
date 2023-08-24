const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  firstName: { type: String, required: [true, "first Name is required"] },
  lastName: { type: String, required: [true, "last Name is required"] },
});

module.exports = mongoose.model("Author", Schema);
