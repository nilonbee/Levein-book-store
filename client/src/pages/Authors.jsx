import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { Avatar, Pagination } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

export default function Authors() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  //imports from global state
  const { books, authors, page, setPage, totalAuthors, limit, fetchAuthors } =
    useGlobalContext();

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
          {!isMobile && (
            <div className="avatar">
              <Link to={`/authors/${author._id}`} style={{ display: "block" }}>
                <Avatar
                  icon={<AntDesignOutlined />}
                  style={{
                    backgroundColor: "#c9e5fd",
                    color: "#1677ff",
                  }}
                />
              </Link>
            </div>
          )}
          <Link to={`/authors/${author._id}`} style={{ display: "block" }}>
            <div className="links">
              <div className="names">{author?.firstName}</div>
              {!isMobile && <div className="names">{author?.lastName}</div>}
              {/* to do */}
              {/* <div className="action"></div> */}
            </div>
          </Link>
        </div>
      ))}
      <div className="pagination">
        {/* <Pagination
          current={page}
          pageSize={limit}
          total={totalAuthors}
          onChange={handlePageChange}
          showSizeChanger={false}
        /> */}
      </div>
    </div>
  );
}
