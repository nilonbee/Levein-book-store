const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: { type: String, required: [true, "name must be provided"] },
  isbn: { type: String, required: [true, "isbn is required"] },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "Author",
    required: [true, "Please provide user"],
  },
});

module.exports = mongoose.model("Book", Schema);
