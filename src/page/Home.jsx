import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import Readed from './Readed';
import { GlobalContext } from '../context/GlobalState';

const Home = () => {
  const { search, setSearch, fetchBooks } = useContext(GlobalContext);
  useEffect(() => {
    fetchBooks();
  }, [search]);

  return (
    <Container className="d-flex row">
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
          <BookCard />
        </div>
      ) : (
        <div>
          <h1>Search to Book!</h1>
        </div>
      )}
    </Container>
  );
};

export default Home;
