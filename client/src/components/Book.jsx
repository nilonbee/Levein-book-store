import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Book = ({ _id, name, isbn, author }) => {
  return (
    <div className="list-item">
      <div className="avatar">
        <Avatar
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        >
          {name}
        </Avatar>
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default Book;
