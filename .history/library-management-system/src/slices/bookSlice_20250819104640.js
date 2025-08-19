import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// api calling

const fetchBooks = createAsyncThunk("fetchBooks", () => {
    axios.ge
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
  extraReducers: (builder) => {},
});
