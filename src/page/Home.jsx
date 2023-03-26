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
    <Container className="">
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <input
            type="text"
            placeholder="Search to Book"
            className="
            p-2
            rounded
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {search ? (
        <Container className="d-flex flex-wrap  mt-5  ">
          <BookCard />
        </Container>
      ) : (
        <div>
          <h1>Search to Book!</h1>
        </div>
      )}
    </Container>
  );
};

export default Home;
