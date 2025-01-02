import { m } from "framer-motion";
import BookCard from "./BookCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const BookGrid = ({ books, onReadClick, onToReadClick }) => {
  return (
    <m.div
      className="books-grid"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {books.map((book) => (
        <m.div key={book.id} variants={item}>
          <BookCard
            book={book}
            onReadClick={onReadClick}
            onToReadClick={onToReadClick}
          />
        </m.div>
      ))}
    </m.div>
  );
};

export default BookGrid;
