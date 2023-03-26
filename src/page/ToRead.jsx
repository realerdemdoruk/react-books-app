import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { IoCloseOutline } from 'react-icons/io5';
import { Container } from 'react-bootstrap';

const ToRead = () => {
  const { selectedBook, readed } = useContext(GlobalContext);

  return (
    <Container>
      {selectedBook ? (
        <div className="col-3 d-flex flex-wrap">
          <div className="col     ">
            <div className="card ">
              <div className="card-body ">
                <div className="d-flex justify-content-center">
                  {
                    <img
                      src={
                        selectedBook.volumeInfo.imageLinks
                          ? selectedBook.volumeInfo.imageLinks.thumbnail
                          : 'https://via.placeholder.com/150'
                      }
                      alt=""
                    />
                  }
                </div>
                <h5 className="card-title text-center">
                  {selectedBook.volumeInfo.title}
                </h5>

                <p>
                  {selectedBook.volumeInfo.description
                    ? selectedBook.volumeInfo.description
                    : 'No Description'}
                </p>

                <h6 className="card-subtitle mb-2 text-muted">
                  {selectedBook.volumeInfo.subtitle}
                </h6>
                <p className="card-text">
                  {selectedBook.volumeInfo.description}
                </p>

                <p>
                  Publis Date:
                  {selectedBook.volumeInfo.publishedDate
                    ? selectedBook.volumeInfo.publishedDate
                    : 'No Date'}
                </p>

                <p>
                  Categories:
                  {selectedBook.volumeInfo.categories
                    ? selectedBook.volumeInfo.categories
                    : 'No Categories'}
                </p>

                <p>
                  Page Count:
                  {selectedBook.volumeInfo.pageCount
                    ? selectedBook.volumeInfo.pageCount
                    : 'No Page Count'}
                </p>

                <p>
                  Language:
                  {selectedBook.volumeInfo.language
                    ? selectedBook.volumeInfo.language
                    : 'No Language'}
                </p>

                <p>
                  Authors:
                  {selectedBook.volumeInfo.authors
                    ? selectedBook.volumeInfo.authors
                    : 'No Author'}
                </p>

                <div
                  className="
                      d-flex
                      justify-content-center"
                >
                  <IoCloseOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Search to Book!</h1>
        </div>
      )}
    </Container>
  );
};

export default ToRead;
