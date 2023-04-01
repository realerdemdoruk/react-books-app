import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'react-bootstrap';
import BookCard from '../components/BookCard';

const Readed = () => {
  const { readedBook, handleDeleteReadedBook } = useContext(GlobalContext);

  return (
    <Container className=" d-flex flex-column justify-content-center gap-3">
      <div className="row  d-flex flex-wrap justify-content-center gap-5">
        <p className="mt-5">Total Books: {readedBook.length}</p>

        {readedBook.map((item) => (
          <>
            <BookCard
              item={item}
              buttonText="Delete"
              onButtonClick={() => handleDeleteReadedBook(item.id)}
            />
          </>
        ))}
      </div>
    </Container>
  );
};

export default Readed;
