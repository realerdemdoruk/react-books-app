import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BookGrid from "../components/BookGrid";
import PageTransition from "../components/PageTransition";
import "../styles/PageTitle.css";

const ToRead = () => {
  const { toReadBooks, removeFromToRead, addToReaded } =
    useContext(GlobalContext);

  return (
    <PageTransition>
      <div className="container">
        <div className="page-title-container">
          <h1 className="page-title">Okuma Listem</h1>
          <p className="page-subtitle">
            Okuma listenizde {toReadBooks.length} kitap bulunuyor
          </p>
        </div>
        {toReadBooks && toReadBooks.length > 0 ? (
          <BookGrid
            books={toReadBooks}
            onReadClick={(book) => {
              removeFromToRead(book.id);
              addToReaded(book);
            }}
            onToReadClick={removeFromToRead}
          />
        ) : (
          <p className="text-center">
            Okuma listenizde henüz kitap bulunmuyor.
          </p>
        )}
      </div>
    </PageTransition>
  );
};

export default ToRead;
