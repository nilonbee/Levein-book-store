import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Spin } from "antd";
import { useGlobalContext } from "../context/context";
import { AlipaySquareFilled } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import Tile from "../components/Tile";

export default function Books() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // State to store the fetched books
  const { books, page, setPage, totalBooks, limit, fetchBooks, loading } =
    useGlobalContext();

  useEffect(() => {
    // Call the fetchBooks function when the component mounts
    fetchBooks(page);
  }, [totalBooks, page]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="list-wrapper">
      <h2>Books</h2>
      {loading ? (
        <div className="content-wrapper">
          <Spin />
        </div>
      ) : (
        books?.map((book) => (
          <Tile
            key={book._id}
            title={book?.name}
            avatar={<AlipaySquareFilled />}
            id={book._id}
            isMobile={isMobile}
            color="#1677ff"
            bgColor="#c9e5fd"
            slug="books"
          />
        ))
      )}
      <div className="pagination">
        {!loading && (<Pagination
          current={page}
          pageSize={limit}
          total={totalBooks}
          onChange={handlePageChange}
          showSizeChanger={false}
        />)}
      </div>
    </div>
  );
}
