import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { Pagination, Spin } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import Tile from "../components/Tile";

export default function Authors() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  //imports from global state
  const { books, authors, page, setPage, totalAuthors, limit, fetchAuthors, loading } =
    useGlobalContext();

  useEffect(() => {
    // Call the fetchAuthors function when the component mounts
    fetchAuthors();
  }, [totalAuthors, page]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="list-wrapper">
      <h2>Authors</h2>
      {loading ? (
        <div className="content-wrapper">
          <Spin />
        </div>
      ) : (
        authors?.map((author) => (
          <Tile
            key={author._id}
            title={author?.firstName}
            subtitle={author?.lastName}
            avatar={<UserOutlined />}
            id={author._id}
            isMobile={isMobile}
            color="#1677ff"
            bgColor="#c9e5fd"
            slug="authors"
          />
        ))
      )}
    </div>
  );
}
