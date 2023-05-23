import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'react-bootstrap';
import BookCard from '../components/BookCard';

const Readed = () => {
  const { readedBook, handleDeleteReadedBook } = useContext(GlobalContext);

  return (
    <Container className=" d-flex flex-column justify-content-center gap-3">
      <div className="row  d-flex flex-wrap justify-content-center gap-5">
        <p className="mt-5">Toplam Okunan Kitap: {readedBook.length}</p>

        {readedBook ? (
          <>
            {readedBook.map((item) => (
              <BookCard
                key={item.id}
                item={item}
                buttonText="Kitabı Kaldır"
                onButtonClick={() => handleDeleteReadedBook(item.id)}
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

export default Readed;
