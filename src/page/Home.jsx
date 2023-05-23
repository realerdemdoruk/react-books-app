import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import { GlobalContext } from '../context/GlobalState';

const Home = () => {
  const { search, setSearch, books, handleBookClick, handleReadedBook } =
    useContext(GlobalContext);

  return (
    <Container className=" d-flex flex-column justify-content-center gap-3">
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <input
            type="text"
            placeholder="Search to Book"
            className="p-2 rounded mt-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row d-flex flex-wrap justify-content-center gap-5">
        {books ? (
          <>
            <p className="mt-5">Toplam Kitap: {books.length}</p>
            {books.map((item) => (
              <BookCard
                key={item.id}
                item={item}
                buttonText="Okundu Olarak İşaretle"
                showHeartButton={true}
                onButtonClick={handleReadedBook}
                onButtoncrow={handleBookClick}
              />
            ))}
          </>
        ) : (
          <div>
            <h1>Kitap Araştır!</h1>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
