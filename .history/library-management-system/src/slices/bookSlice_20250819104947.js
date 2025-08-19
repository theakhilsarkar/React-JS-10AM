import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// api calling

const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const res = await axios.get("http://localhost:3000/books");
  return res.data;
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
    builder.addCase(fetchBooks.pending, (state,action) => {

    });
  },
});
