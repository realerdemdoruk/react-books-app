import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import PageTransition from "../components/PageTransition";
import BookGrid from "../components/BookGrid";
import "../styles/Home.css";

const Home = () => {
  const { books, loading, addToReaded, addToRead, searchBooks } =
    useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("Dostoyevski");

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(searchTerm);
  };

  return (
    <PageTransition>
      <div className="container">
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Kitap ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button">
              Ara
            </button>
          </form>
        </div>

        {loading ? (
          <div className="loading">Yükleniyor...</div>
        ) : (
          books && (
            <BookGrid
              books={books}
              onReadClick={addToReaded}
              onToReadClick={addToRead}
            />
          )
        )}
      </div>
    </PageTransition>
  );
};

export default Home;
