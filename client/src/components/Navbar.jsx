import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import BookForm from "./BookForm";
import AuthorForm from "./AuthorForm";
import Books from "../pages/Books";
import Authors from "../pages/Authors";

const Navbar = ({openAuthorModal, openBookModal}) => {
  

  return (
    <main>
    {/* title */}
    <div className="nav">
      <div className="section-title">
      <Link to="/">
        <h4>Levein Book Store</h4>
        <div className="underline"></div>  
        </Link>
      </div>
      <div>
        <Link to="/books">
          <span className="nav-links">Books</span>
        </Link>
      </div>
      <div>
        <Link to="/authors">
          <span className="nav-links">Authors</span>
        </Link>
      </div>
      <div className="actions">
        <Button type="primary" onClick={openAuthorModal} className="btn">
          Add Author
        </Button>
        <Button type="primary" onClick={openBookModal} className="btn">
          Create A Book
        </Button>
      </div>
    </div>
  </main>
  );
};

export default Navbar;
