import React, { useState } from 'react';
// react icon

import { AiOutlineHeart } from 'react-icons/ai';
import Readed from '../page/Readed';

const BookCard = ({ books, readed, setReaded }) => {
  const addReaded = (books) => {
    setReaded([...readed, books]);
    console.log(readed);
  };

  return (
    <div
      className="d-flex
        
    "
      style={{
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {books.map((book) => {
        return (
          <div className="row d-flex">
            <div className="col-4">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {book.volumeInfo.subtitle}
                  </h6>
                  <p className="card-text">{book.volumeInfo.description}</p>
                  <img src={book.thumbnail} alt="" />
                  <p>Authors: {book.volumeInfo.authors}</p>

                  <a href="#" className="card-link">
                    <AiOutlineHeart
                      onClick={() => {
                        addReaded(books);
                      }}
                    />
                  </a>
                  <a href="#" className="card-link">
                    Readed
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <Readed readed={readed} /> */}
    </div>
  );
};

export default BookCard;
