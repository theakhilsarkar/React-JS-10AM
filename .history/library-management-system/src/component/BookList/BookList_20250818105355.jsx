import React from "react";
import "./BookList.css";
export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const res = await axios.get("http://localhost:3000/books");
    setBooks(res.data);
    console.log(books.length);
  }

  const removeBook = (id) => {
    // filter --> index-->array
    console.log(id);
    axios.delete("http://localhost:3000/books/" + id);
    setBooks(books.filter((book) => book.id != id));
    // fetchBooks();
  };

  return (
    <div>
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
              <button
                onClick={() => removeBook(book.id)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
