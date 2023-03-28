import { AiOutlineHeart } from 'react-icons/ai'; // react icon

const BookCard = ({ item, onButtonClick, buttonText, onButtoncrow }) => {
  return (
    <>
      <div className="card col-4 d-flex ">
        <div className="card-body ">
          <div className="d-flex justify-content-center">
            {
              <img
                src={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : 'https://via.placeholder.com/150'
                }
                alt={
                  item.volumeInfo.title ? item.volumeInfo.title : 'Book Cover'
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

          <div
            className="d-flex
                justify-content-evenly
                "
          >
            <AiOutlineHeart onClick={() => onButtoncrow(item)} />

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
