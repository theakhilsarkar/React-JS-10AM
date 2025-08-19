import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../../component/BookList/BookList";
import Dashboard from "../../component/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../slices/bookSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <h1>{status}</h1>
      <h1>{error}</h1>
      <h1>{books.length}</h1>
      {/* <Dashboard />
      <BookList /> */}
    </>
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

// components
//    Book
//      Book.jsx
//      Book.css

// screens-f
//    Home-f
//      Home.jsx
//      Home.css
//    Menu-f
//      Menu.jsx
//      Menu.css
