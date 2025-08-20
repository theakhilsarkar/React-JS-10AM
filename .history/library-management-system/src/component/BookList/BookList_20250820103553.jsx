import "./BookList.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../slices/bookSlice";

export default function BookList() {
  const { books, status, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div className="book-list">
      <ol className="ol-list list-group list-group-numbered">
        {books.map((book, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{book.title}</div>
                {book.author}
              </div>
              <span className="badge text-bg-primary rounded-pill">
                {book.isbn.length}
              </span>
              <button onClick={() => dis} className="btn btn-danger">
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
