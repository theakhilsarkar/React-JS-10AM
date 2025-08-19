import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../../component/BookList/BookList";
import Dashboard from "../../component/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const {books,} = useSelector((state) => state.books);

  return (
    <>
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
