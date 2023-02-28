import { createContext, useState, useMemo } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [search, setSearch] = useState('React');
  const [books, setBooks] = useState([]);
  const [readed, setReaded] = useState([]);

  const fetchBooks = async () => {
    const result = await axios
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
        readed,
        setReaded,

        fetchBooks,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
