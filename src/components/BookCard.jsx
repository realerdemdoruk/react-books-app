import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AiOutlineHeart } from 'react-icons/ai';
import '../style.css';

const BookCard = ({
  item,
  onButtonClick,
  buttonText,
  onButtoncrow,
  showHeartButton,
}) => {
  const { toggleDescription } = useContext(GlobalContext);
  const [showDescription, setShowDescription] = useState(false);
  const toggleBookDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
      <div className="card col-md-3 col-10 d-flex ">
        <div className="card-body ">
          <div className="d-flex justify-content-center">
            <img
              src={
                item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.thumbnail
                  : 'https://via.placeholder.com/150'
              }
              alt={
                item.volumeInfo.title ? item.volumeInfo.title : 'Kitap Kapak'
              }
            />
          </div>
          <h5 className="card-title text-center mt-2">
            {item.volumeInfo.title ? item.volumeInfo.title : 'Kitap Adı'}
          </h5>

          {item.volumeInfo.description && (
            <p>
              {showDescription
                ? item.volumeInfo.description
                : item.volumeInfo.description.substring(0, 100)}
              <br />
              {item.volumeInfo.description.length > 100 && (
                <div className="d-flex justify-content-center mt-2">
                  <button onClick={toggleBookDescription}>
                    {showDescription ? 'Daha Az Göster' : 'Daha Fazla Göster'}
                  </button>
                </div>
              )}
            </p>
          )}
          <p>
            Yayın Tarihi:
            {item.volumeInfo.publishedDate
              ? item.volumeInfo.publishedDate
              : 'Tarih Yok'}
          </p>
          <p>
            Kategoriler:
            {item.volumeInfo.categories
              ? item.volumeInfo.categories
              : 'Kategori Yok'}
          </p>
          <p>
            Sayfa Sayısı:
            {item.volumeInfo.pageCount
              ? item.volumeInfo.pageCount
              : 'Sayfa Sayısı Yok'}
          </p>
          <p>
            Dil:
            {item.volumeInfo.language ? item.volumeInfo.language : 'Dil Yok'}
          </p>
          <p>
            Yazar:
            {item.volumeInfo.authors ? item.volumeInfo.authors : 'Yazar Yok'}
          </p>
          <div className="d-flex justify-content-evenly align-items-center">
            {showHeartButton && (
              <AiOutlineHeart
                className="icon"
                onClick={() => onButtoncrow(item)}
              />
            )}
            <button className="btn" onClick={() => onButtonClick(item)}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
