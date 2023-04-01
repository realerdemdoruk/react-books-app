import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AiOutlineHeart } from 'react-icons/ai';
import './style.css';

const BookCard = ({
  item,
  onButtonClick,
  buttonText,
  onButtoncrow,
  showHeartButton,
}) => {
  const { showFullDescription, toggleDescription } = useContext(GlobalContext);
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
              alt={item.volumeInfo.title ? item.volumeInfo.title : 'Book Cover'}
            />
          </div>
          <h5 className="card-title text-center mt-2">
            {item.volumeInfo.title}
          </h5>

          {item.volumeInfo.description && (
            <p>
              {showFullDescription
                ? item.volumeInfo.description
                : item.volumeInfo.description.substring(0, 100)}
              <br />
              {item.volumeInfo.description.length > 100 && (
                <button onClick={toggleDescription}>
                  {showFullDescription ? 'Show less' : 'Show more'}
                </button>
              )}
            </p>
          )}

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
            {item.volumeInfo.authors ? item.volumeInfo.authors : 'No Author'}
          </p>
          <div className="d-flex justify-content-evenly align-items-center">
            {showHeartButton && (
              <AiOutlineHeart
                className="icon"
                onClick={() => onButtoncrow(item)}
              />
            )}
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick(item)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
