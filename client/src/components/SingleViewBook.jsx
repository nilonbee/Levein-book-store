import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getApiData from "../api-service/getdataApi";

export default function SingleBook() {
  const { id } = useParams(); // Access the book ID from the URL

  // State to store the book data
  const [singleBook, setSingleBook] = useState(null);

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
  
  // const getSpecialBooks = () => {
  //   let tempBooks = books.filter((book) => book.author === id)
  //   return tempBooks;
  // }

  return (
    <div className="list-wrapper">
      {singleBook ? (
        <div className="singleView">
          <h4>{`Book Name: ${singleBook?.book.name}`}</h4>
          <h4>{`Isbn code: ${singleBook?.book.isbn}`}</h4> 
          <h4>{`Author: ${singleBook.book.author}`}</h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
