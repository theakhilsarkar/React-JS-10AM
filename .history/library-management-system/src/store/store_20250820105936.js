import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

// redux toolkit - store

// Implement Redux Toolkit in LMS
// 1. BookSlice
// .
// .
// .
// .

// 
