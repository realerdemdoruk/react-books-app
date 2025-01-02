import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import BookCard from "../components/BookCard";
import "./Home.css";

const Home = () => {
  const { books, loading, addToReaded, addToRead, searchBooks } =
    useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(searchTerm);
  };

  return (
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
        <div className="books-grid">
          {books &&
            books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onReadClick={addToReaded}
                onToReadClick={addToRead}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
