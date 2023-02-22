import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import Readed from './Readed';

const Home = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [readed, setReaded] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios
        .get(
          ` https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBuIRxGUvT72g_xACmH8NkaPVS1kF45PFM`
        )
        .then((res) => {
          console.log(res.data.items);
          setBooks(res.data.items);
        });
    };
    fetchBooks();
  }, [search]);

  return (
    <Container
      className="d-flex row

 
    
    "
    >
      <div className=" d-flex">
        <div className="col">
          <input
            type="text"
            placeholder="Search to Book"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {search ? (
        <div className="d-flex">
          <BookCard books={books} readed={readed} setReaded={setReaded} />
        </div>
      ) : (
        <div className="">
          <h1 className="">Search to Book!</h1>
        </div>
      )}
    </Container>
  );
};

export default Home;
