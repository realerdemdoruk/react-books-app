import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; // react icon
import { GlobalContext } from '../context/GlobalState';

const BookCard = () => {
  const { books, handleBookClick, handleReadedBook } =
    useContext(GlobalContext);

  return (
    <div
      className="d-flex
      flex-wrap
      gap-3 
     "
    >
      {books &&
        books.map((book) => {
          return (
            <div className="col-3 d-flex flex-wrap">
              <div className="col">
                <div className="card ">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center">
                      {
                        <img
                          src={
                            book.volumeInfo.imageLinks
                              ? book.volumeInfo.imageLinks.thumbnail
                              : 'https://via.placeholder.com/150'
                          }
                        />
                      }
                    </div>
                    <h5 className="card-title mt-2 text-center">
                      {book.volumeInfo.title}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {book.volumeInfo.subtitle}
                    </h6>
                    <p>Authors: {book.volumeInfo.authors}</p>
                    <div className="d-flex justify-content-evenly">
                      <a href="#" className="card-link">
                        <AiOutlineHeart onClick={() => handleBookClick(book)} />
                      </a>
                      <a
                        href="#"
                        className="card-link"
                        onClick={() => handleReadedBook(book)}
                      >
                        Readed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BookCard;
