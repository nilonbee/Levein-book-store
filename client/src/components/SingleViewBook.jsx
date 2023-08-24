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
console.log('singleBoook', singleBook)
  return (
    <div className="list-wrapper">
      {singleBook ? (
        <div>
          <h2>{singleBook?.book.name}</h2>
          <p>{singleBook?.book.isbn}</p> 
          <p>{singleBook.book.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
