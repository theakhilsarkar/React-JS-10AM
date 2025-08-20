import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// api calling

// fetch books by api
export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const res = await axios.get("http://localhost:3000/books");
  return res.data;
});

// delete book by api
export const deleteBook = createAsyncThunk("deleteBook", async () => {
  
});

// neutral
// pending
// fullfilled
// error/rejected

const initialState = {
  books: [],
  status: "neutral",
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {},
  // for network request, to fetch data from the server.
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading...";
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "success";
      state.books = action.payload;
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.error;
    });
  },
});

export default bookSlice.reducer;
