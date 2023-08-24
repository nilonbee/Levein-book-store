const StatusCodes = require("http-status-codes");
const Author = require("../models/author");
const Book = require("../models/book");

const createBook = async (req, res) => {
  const { author, name, isbn } = req.body;

  const legalAuthor = Author.findById({ _id: author });
  if (!legalAuthor) {
    //bad Request
  }

  if (!isbn) {
    //bad Request
  }

  if (!name) {
    //bad request
  }
  console.log(author);
  const item = await Book.create(req.body);
  res.status(201).json({ msg: "SUCCESS", data: item });
};

const createAuthor = async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!(firstName && lastName)) {
    //bad request
  }
  const author = await Author.create(req.body);

  res.status(201).json({ msg: "SUCCESS", author });
};

const getAllBooks = async (req, res) => {
  // Fetch all books without pagination for total count
  const totalBooks = await Book.countDocuments({});

  // pagination stuff
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  
  //logic if page is 4 we have to skip items of three pages
  const skip = (page - 1) * limit;

  const books = await Book.find({}).skip(skip).limit(limit);
  res.status(201).json({ msg: "SUCCESS", NOB: totalBooks, data: books });
};

const getAllAuthors = async (req, res) => {
  try {
    // Fetch all authors without pagination for total count
    const totalAuthors = await Author.countDocuments({});

    // Pagination stuff
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // Fetch authors for the current page
    const authors = await Author.find({}).skip(skip).limit(limit);

    res.status(201).json({
      msg: "SUCCESS",
      NOA: totalAuthors, // Total count without considering the limit
      data: authors,
    });
  } catch (error) {
    // Handle the error and send an error response
    res
      .status(500)
      .json({ msg: "Error fetching authors", error: error.message });
  }
};

const getSingleBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findOne({ _id: id });
  if (!book) {
    res.status(404).send("not found");
  }
  res.status(201).json({ msg: "SUCCESS", id, book });
};

const getSingleAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findOne({ _id: id });
  if (!author) {
    res.status(404).send("not found");
  }
  res.status(201).json({ msg: "SUCCESS", id, author });
};

module.exports = {
  getSingleAuthor,
  getSingleBook,
  getAllBooks,
  getAllAuthors,
  createAuthor,
  createBook,
};
