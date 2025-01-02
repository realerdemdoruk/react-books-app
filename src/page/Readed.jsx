import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BookGrid from "../components/BookGrid";
import PageTransition from "../components/PageTransition";
import "../styles/PageTitle.css";

const Readed = () => {
  const { readedBooks, removeFromReaded } = useContext(GlobalContext);

  return (
    <PageTransition>
      <div className="container">
        <div className="page-title-container">
          <h1 className="page-title">Okuduğum Kitaplar</h1>
          <p className="page-subtitle">
            Şimdiye kadar {readedBooks.length} kitap okudunuz
          </p>
        </div>
        {readedBooks && readedBooks.length > 0 ? (
          <BookGrid
            books={readedBooks}
            onReadClick={removeFromReaded}
            onToReadClick={() => {}}
          />
        ) : (
          <p className="text-center">Henüz okunmuş kitap bulunmuyor.</p>
        )}
      </div>
    </PageTransition>
  );
};

export default Readed;
