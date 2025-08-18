import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
export default function Home() {
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

// github

// git

// 3

// commit ready
// push
// pull

// Home - List
// Home - Box
// Home - Button


// src-f

// screens-f
//    Home-f
//      Home-f