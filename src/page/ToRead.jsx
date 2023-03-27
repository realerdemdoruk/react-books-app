import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { IoCloseOutline } from 'react-icons/io5';
import { Container } from 'react-bootstrap';

const ToRead = () => {
  const { selectedBook, handleDeleteBook } = useContext(GlobalContext);
  return (
    <Container
      className="d-flex 
    justify-content-evenly 
    mt-5
    flex-wrap
    gap-5
    "
    >
      {selectedBook ? (
        selectedBook.map((item) => (
          <div className="col gap-5 d-flex flex-wrap">
            <div className="col">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    {
                      <img
                        src={
                          item.volumeInfo.imageLinks
                            ? item.volumeInfo.imageLinks.thumbnail
                            : 'https://via.placeholder.com/150'
                        }
                      />
                    }
                  </div>
                  <h5 className="card-title text-center mt-2">
                    {item.volumeInfo.title}
                  </h5>

                  <p>
                    {item.volumeInfo.description
                      ? item.volumeInfo.description
                      : 'No Description'}
                  </p>

                  <h6 className="card-subtitle mb-2 text-muted">
                    {item.volumeInfo.subtitle}
                  </h6>
                  <p className="card-text">{item.volumeInfo.description}</p>

                  <p>
                    Publis Date:
                    {item.volumeInfo.publishedDate
                      ? item.volumeInfo.publishedDate
                      : 'No Date'}
                  </p>

                  <p>
                    Categories:
                    {item.volumeInfo.categories
                      ? item.volumeInfo.categories
                      : 'No Categories'}
                  </p>

                  <p>
                    Page Count:
                    {item.volumeInfo.pageCount
                      ? item.volumeInfo.pageCount
                      : 'No Page Count'}
                  </p>

                  <p>
                    Language:
                    {item.volumeInfo.language
                      ? item.volumeInfo.language
                      : 'No Language'}
                  </p>

                  <p>
                    Authors:
                    {item.volumeInfo.authors
                      ? item.volumeInfo.authors
                      : 'No Author'}
                  </p>

                  <div
                    className="d-flex justify-content-center
              
                    "
                  >
                    <IoCloseOutline
                      style={{
                        color: 'red',
                        fontSize: '30px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleDeleteBook(item.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>Search to Book!</h1>
        </div>
      )}
    </Container>
  );
};

export default ToRead;
