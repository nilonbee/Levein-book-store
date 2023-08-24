import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useGlobalContext } from "./context/context";

import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import AuthorForm from "./components/AuthorForm";
import Home from "./pages/Home";
import SingleViewAuthor from "./components/SingleViewAuthor";
import SingleViewBook from "./components/SingleViewBook";
import Authors from "./pages/Authors";
import Books from "./pages/Books";

function App() {
  const {
    modal1Open,
    modal2Open,
    openAuthorModal,
    closeAuthorModal,
    openBookModal,
    closeBookModal,
  } = useGlobalContext();
  return (
    <React.Fragment>
      <Navbar openAuthorModal={openAuthorModal} openBookModal={openBookModal} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/authors/" component={Authors} />
        <Route exact path="/books/" component={Books} />
        <Route exact path="/authors/:id" component={SingleViewAuthor} />
        <Route exact path="/books/:id" component={SingleViewBook} />
        <Route component={Error} />
      </Switch>
      <BookForm
        title="Book"
        modalOpen={modal1Open}
        setModalOpen={closeBookModal}
      />
      <AuthorForm
        title="Author"
        modalOpen={modal2Open}
        setModalOpen={closeAuthorModal}
      />
    </React.Fragment>
  );
}

export default App;
