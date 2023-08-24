import React, { useState } from "react";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ openAuthorModal, openBookModal }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("link", currentPath);

  return (
    <main>
      {/* title */}
      <div className="nav">
        {/* Navbar Links */}
        <div>
          <Link to="/" className="title-link">
            <span className="nav-links">Library</span>
          </Link>
        </div>
        <div>
          <Link to="/books" className="nav-link">
            <span className="nav-links">Books</span>
          </Link>
        </div>
        <div>
          <Link to="/authors" className="nav-link">
            <span className="nav-links">Authors</span>
          </Link>
        </div>
        <div className="actions">
          {currentPath === "/authors" && (
            <Button type="primary" onClick={openAuthorModal} className="btn">
              Add Author
            </Button>
          )}
          {currentPath === "/books" && (
            <Button type="primary" onClick={openBookModal} className="btn">
              Create A Book
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
