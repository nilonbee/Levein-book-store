import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import getApiData from "../api-service/getdataApi";
import { Avatar, Pagination } from "antd";

export default function Authors() {
  const {
    authors,
    page,
    setPage,
    totalAuthors,
    limit,
    fetchAuthors,
  } = useGlobalContext();

  useEffect(() => {
    // Call the fetchAuthors function when the component mounts
    fetchAuthors(page);
  }, [totalAuthors, page]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  
  return (
    <div className="list-wrapper">
      <h2>Authors</h2>
      {authors?.map((author) => (
        <div className="list-item" key={author._id}>
          <div className="avatar">
            <Link to={`/authors/${author._id}`} style={{ display: "block" }}>
              <Avatar
                style={{
                  backgroundColor: "#fde3cf",
                  color: "#f56a00",
                }}
              >
                {author.firstName}
              </Avatar>
            </Link>
          </div>
          <Link to={`/authors/${author._id}`} style={{ display: "block" }}>
            <div>
              <div>{author?.firstName}</div>
              <div>{author?.lastName}</div>
              <div className="action"></div>
            </div>
          </Link>
        </div>
      ))}
      <div className="pagination">
        <Pagination
          current={page}
          pageSize={limit}
          total={totalAuthors}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
