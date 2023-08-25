import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

import getApiData from "../api-service/getdataApi";
import { Spin } from "antd";

export default  function SingleViewAuthor() {
  const { id } = useParams(); // Access the book ID from the URL
  const {books} = useGlobalContext();
  const authorBooks = books.filter((item)=>item.author===id);
  // State to store the book data
  const [singleAuthor, setSingleAuthor] = useState(null);

  const fetchAuthor = async () => {
    try {
      // Fetch data for the specific book using the book ID
      const authorData = await getApiData(`/authors/${id}`);
      setSingleAuthor(authorData);
    } catch (error) {
      console.error("Error fetching book data", error);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, [id]);

  return (
    <div className="list-wrapper">
      {singleAuthor ? (
        <div className="singleView">
          <h4>{`First Name: ${singleAuthor.author.firstName}`}</h4>
          <h4>{`Last Name: ${singleAuthor.author.lastName}`}</h4>
          <h4>{`Books By Author: ${authorBooks.map((book)=>book.name)}`}</h4>
        </div>
      ) : (
        <div className="content-wrapper">
          <Spin/>
        </div>
      )}
    </div>
  );
}
