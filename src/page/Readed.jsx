import React, { useContext, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'react-bootstrap';

import BookCard from '../components/BookCard';

const Readed = () => {
  const {
    readedBook,
    handleBookClick,
    handleDeleteReadedBook,
    handleDeleteBook,
  } = useContext(GlobalContext);
  const [showMore, setShowMore] = useState(false);
  return (
    <Container
      className="
      d-flex
      flex-column
      justify-content-center
      gap-3

    "
    >
      <div
        className="row 
          d-flex
          flex-wrap
          justify-content-center
          gap-5
          "
      >
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
