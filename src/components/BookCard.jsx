import React from "react";
import "../styles/BookCard.css";
import { FaBookReader, FaRegBookmark, FaTrash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const getHighResImage = (imageLinks) => {
  if (!imageLinks) return "https://placehold.co/200x300/lightgray/gray?text=Resim+Bulunamadi";
  
  // Thumbnail URL'sini yüksek kaliteli versiyona dönüştür
  let imageUrl = imageLinks.thumbnail || imageLinks.smallThumbnail;
  if (imageUrl) {
    // Zoom seviyesini artır
    imageUrl = imageUrl.replace('zoom=1', 'zoom=3');
    // Resim boyutunu artır
    imageUrl = imageUrl.replace('&edge=curl', '');
    // http -> https
    imageUrl = imageUrl.replace('http:', 'https:');
    // Resim boyutunu büyüt
    return imageUrl.replace('w=128', 'w=512').replace('h=192', 'h=768');
  }
  
  return "https://placehold.co/200x300/lightgray/gray?text=Resim+Bulunamadi";
};

const BookCard = ({ book, onReadClick, onToReadClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReadClick = (book) => {
    if (location.pathname === "/readed") {
      onReadClick(book.id);
    } else if (location.pathname === "/toread") {
      onReadClick(book);
      navigate("/readed");
    } else {
      onReadClick(book);
      navigate("/readed");
    }
  };

  const handleToReadClick = (book) => {
    if (location.pathname === "/toread") {
      onToReadClick(book.id);
    } else {
      onToReadClick(book);
      navigate("/toread");
    }
  };

  const renderButtons = () => {
    if (location.pathname === "/readed") {
      return (
        <button
          className="action-button delete-button"
          onClick={() => handleReadClick(book)}
        >
          <FaTrash /> Kaldır
        </button>
      );
    } else if (location.pathname === "/toread") {
      return (
        <>
          <button
            className="action-button delete-button"
            onClick={() => handleToReadClick(book)}
          >
            <FaTrash /> Kaldır
          </button>
          <button
            className="action-button read-button"
            onClick={() => handleReadClick(book)}
          >
            <FaBookReader /> Okundu
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="action-button read-button"
            onClick={() => handleReadClick(book)}
          >
            <FaBookReader /> Okundu
          </button>
          <button
            className="action-button to-read-button"
            onClick={() => handleToReadClick(book)}
          >
            <FaRegBookmark /> Okuyacağım
          </button>
        </>
      );
    }
  };

  return (
    <div className="book-card">
      <div className="book-card-inner">
        <div className="book-card-front">
          <div className="book-image-container">
            <img
              src={getHighResImage(book.volumeInfo.imageLinks)}
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
          <div className="book-actions">{renderButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
