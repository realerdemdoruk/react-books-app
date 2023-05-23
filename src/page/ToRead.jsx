import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'react-bootstrap';
import BookCard from '../components/BookCard';

const ToRead = () => {
  const { selectedBook, handleDeleteBook } = useContext(GlobalContext);

  return (
    <Container className=" d-flex flex-column justify-content-center gap-3">
      <div className="row d-flex flex-wrap justify-content-center gap-5">
        {selectedBook ? (
          <>
            <p className="mt-5">Toplam Okunacak Kitap: {selectedBook.length}</p>
            {selectedBook.map((item) => (
              <BookCard
                key={item.id}
                item={item}
                buttonText="Kitabı Kaldır"
                onButtonClick={() => handleDeleteBook(item.id)}
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

export default ToRead;
