import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getApiData from "../api-service/getdataApi";

export default function SingleViewAuthor() {
  const { id } = useParams(); // Access the book ID from the URL

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
        <div>
          <h2>{singleAuthor?.author?.firstName}</h2>
          <h2>{singleAuthor?.author?.lastName}</h2> 
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
