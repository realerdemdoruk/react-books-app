import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'react-bootstrap';
import BookCard from '../components/BookCard';
const ToRead = () => {
  const { selectedBook, handleDeleteBook } = useContext(GlobalContext);
  return (
    <Container
      className=" d-flex
      flex-column
      justify-content-center
      gap-3"
    >
      <div
        className="row 
      d-flex
      flex-wrap
      justify-content-center
      gap-5
      "
      >
        {selectedBook ? (
          selectedBook.map((item) => (
            <>
              <BookCard
                item={item}
                buttonText="Delete"
                onButtonClick={() => handleDeleteBook(item.id)}
              />
            </>
          ))
        ) : (
          <div>
            <h1>Search to Book!</h1>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ToRead;
