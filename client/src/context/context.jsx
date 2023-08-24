import React, { useContext, useEffect, useState } from "react";
import getApiData from "../api-service/getdataApi";

const AppContext = React.createContext();

const Context = ({ children }) => {
  //Authors
  const limit = 8;
  const [authors, setAuthors] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [totalAuthors, setTotalAuthors] = useState(0); // Total number of authors

  const fetchAuthors = async (pageToFetch) => {
    try {
      const response = await getApiData(
        `authors/?page=${pageToFetch}&limit=${limit}`
      );
      setAuthors(response.data);
      setTotalAuthors(response.NOA);
    } catch (error) {
      console.error("Error fetching authors", error);
    }
  };

  // Books
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);

  // Modal functions
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const openBookModal = () => {
    setModal1Open(true);
  };

  const closeBookModal = () => {
    setModal1Open(false);
  };

  const openAuthorModal = () => {
    setModal2Open(true);
  };

  const closeAuthorModal = () => {
    setModal2Open(false);
  };

  const fetchBooks = async (pageToFetch) => {
    try {
      const tempBooks = await getApiData(`books/?page=${pageToFetch}&limit=${limit}`);
      setBooks(tempBooks.data);
      setTotalBooks(tempBooks.NOB);
      console.log('NBooks', books);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          authors,
          setAuthors,
          page,
          setPage,
          totalAuthors,
          totalBooks,
          setTotalAuthors,
          limit,
          fetchAuthors,
          books,
          fetchBooks,
          modal1Open,
          modal2Open,
          openAuthorModal,
          closeAuthorModal,
          openBookModal,
          closeBookModal,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
