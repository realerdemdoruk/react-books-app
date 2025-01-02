import React from "react";
import "./BookCard.css";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";

const BookCard = ({ book, onReadClick, onToReadClick }) => {
  return (
    <div className="book-card">
      <div className="book-card-inner">
        <div className="book-card-front">
          <div className="book-image-container">
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/128x190?text=Resim+Yok"
              }
              alt={book.volumeInfo.title}
              className="book-image"
            />
            <div className="book-overlay">
              <h3 className="book-title">{book.volumeInfo.title}</h3>
              <p className="book-author">
                {book.volumeInfo.authors?.join(", ") || "Yazar bilgisi yok"}
              </p>
            </div>
          </div>
        </div>
        <div className="book-card-back">
          <h3 className="book-title">{book.volumeInfo.title}</h3>
          <p className="book-description">
            {book.volumeInfo.description?.substring(0, 200)}
            {book.volumeInfo.description?.length > 200 ? "..." : ""}
          </p>
          <div className="book-details">
            <p>
              <strong>Yayın Tarihi:</strong>{" "}
              {book.volumeInfo.publishedDate?.substring(0, 4) ||
                "Belirtilmemiş"}
            </p>
            <p>
              <strong>Sayfa Sayısı:</strong>{" "}
              {book.volumeInfo.pageCount || "Belirtilmemiş"}
            </p>
          </div>
          <div className="book-actions">
            <button
              className="action-button read-button"
              onClick={() => onReadClick(book)}
            >
              <FaBookReader /> Okundu
            </button>
            <button
              className="action-button to-read-button"
              onClick={() => onToReadClick(book)}
            >
              <FaRegBookmark /> Okuyacağım
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
