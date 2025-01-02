import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async (query = "react") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
      );
      const data = await response.json();
      setBooks(data.items || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
      setLoading(false);
    }
  };

  const searchBooks = (query) => {
    if (query.trim()) {
      fetchBooks(query);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const [readedBooks, setReadedBooks] = useState([]);
  const [toReadBooks, setToReadBooks] = useState([]);

  const addToReaded = (book) => {
    setReadedBooks([...readedBooks, book]);
  };

  const removeFromReaded = (id) => {
    setReadedBooks(readedBooks.filter((book) => book.id !== id));
  };

  const addToRead = (book) => {
    setToReadBooks([...toReadBooks, book]);
  };

  const removeFromToRead = (id) => {
    setToReadBooks(toReadBooks.filter((book) => book.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{
        books,
        loading,
        readedBooks,
        toReadBooks,
        addToReaded,
        removeFromReaded,
        addToRead,
        removeFromToRead,
        searchBooks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
