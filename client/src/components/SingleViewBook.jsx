import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getApiData from "../api-service/getdataApi";
import { useGlobalContext } from "../context/context";

export default function SingleBook() {
  const { id } = useParams(); // Access the book ID from the URL

  // State to store the book data
  const [singleBook, setSingleBook] = useState(null);
  const { authors } = useGlobalContext();

  const fetchBookData = async () => {
    try {
      // Fetch data for the specific book using the book ID
      const bookData = await getApiData(`/books/${id}`);
      setSingleBook(bookData);
    } catch (error) {
      console.error("Error fetching book data", error);
    }
  };

  useEffect(() => {
    fetchBookData();
  }, [id]);

  const authorName = authors.find((author) => author._id === singleBook?.book?.author);
  
  return (
    <div className="list-wrapper">
      {singleBook ? (
        <div className="singleView">
          <h4>{`Book Name: ${singleBook?.book?.name}`}</h4>
          <h4>{`Isbn code: ${singleBook?.book?.isbn}`}</h4> 
          <h4>{`Author: ${authorName.firstName} ${authorName.lastName}`}</h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
