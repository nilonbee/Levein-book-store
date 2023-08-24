const express = require("express");
const {
  getSingleAuthor,
  getSingleBook,
  getAllBooks,
  getAllAuthors,
  createAuthor,
  createBook,
} = require("../controllers/main");

const router = express.Router();
//authors
router.route("/authors").get(getAllAuthors).post(createAuthor);
router.route("/books").get(getAllBooks).post(createBook);
router.route("/books/:id").get(getSingleBook);
router.route("/authors/:id").get(getSingleAuthor);

module.exports = router;
