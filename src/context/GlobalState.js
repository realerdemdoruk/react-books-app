import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [search, setSearch] = useState('Anna Karenina');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [readedBook, setReadedBook] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, [search]);




  function handleBookClick(books) {
    const isExist = selectedBook.find((book) => book.id === books.id);
    if (isExist) {
      alert('Bu kitap zaten seçili.');
    }
    if (!selectedBook.includes(books)) {
      setSelectedBook([...selectedBook, books]);
    }
  }

  function handleDeleteBook(id) {
    setSelectedBook(selectedBook.filter((book) => book.id !== id));
  }

  function handleReadedBook(books) {
    const isExist = readedBook.find((book) => book.id === books.id);
    if (isExist) {
      alert('Bu kitap zaten okundu olarak işaretlendi.');
    }
    if (!readedBook.includes(books)) {
      setReadedBook([...readedBook, books]);
    }
  }

  function handleDeleteReadedBook(id) {
    setReadedBook(readedBook.filter((book) => book.id !== id));
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const fetchBooks = async () => {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBuIRxGUvT72g_xACmH8NkaPVS1kF45PFM`
      )
      .then((res) => {
        setBooks(res.data.items);
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        books,
        setBooks,
        handleDeleteBook,
        selectedBook,
        setSelectedBook,
        handleBookClick,
        fetchBooks,
        readedBook,
        handleReadedBook,
        handleDeleteReadedBook,
        showFullDescription,
      
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
