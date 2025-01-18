import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // LocalStorage'dan başlangıç verilerini al
  const [readedBooks, setReadedBooks] = useState(() => {
    const localData = localStorage.getItem("readedBooks");
    return localData ? JSON.parse(localData) : [];
  });

  const [toReadBooks, setToReadBooks] = useState(() => {
    const localData = localStorage.getItem("toReadBooks");
    return localData ? JSON.parse(localData) : [];
  });

  // readedBooks değiştiğinde LocalStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem("readedBooks", JSON.stringify(readedBooks));
  }, [readedBooks]);

  // toReadBooks değiştiğinde LocalStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem("toReadBooks", JSON.stringify(toReadBooks));
  }, [toReadBooks]);

  const fetchBooks = async (query = "Dostoyevski") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
      );

      if (response.status === 429) {
        console.error("Rate limit exceeded. Please wait a moment before trying again.");
        setBooks([]);
        // Add a delay before allowing next request
        await new Promise(resolve => setTimeout(resolve, 2000));
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
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

  const addToReaded = (book) => {
    const isExist = readedBooks.find((item) => item.id === book.id);
    if (isExist) {
      toast.warning("Bu kitap zaten okundu olarak işaretlenmiş!");
      return;
    }
    setReadedBooks([...readedBooks, book]);
    toast.success("Kitap okundu olarak işaretlendi!");
  };

  const removeFromReaded = (id) => {
    setReadedBooks(readedBooks.filter((book) => book.id !== id));
    toast.info("Kitap okundu listesinden kaldırıldı");
  };

  const addToRead = (book) => {
    const isExist = toReadBooks.find((item) => item.id === book.id);
    if (isExist) {
      toast.warning("Bu kitap zaten okuma listenizde!");
      return;
    }
    setToReadBooks([...toReadBooks, book]);
    toast.success("Kitap okuma listenize eklendi!");
  };

  const removeFromToRead = (id) => {
    setToReadBooks(toReadBooks.filter((book) => book.id !== id));
    toast.info("Kitap okuma listenizden kaldırıldı");
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
