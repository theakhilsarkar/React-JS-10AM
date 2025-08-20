import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// api calling
const base_api = "http://localhost:3000/books";

// fetch books by api
export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const res = await axios.get(base_api);
  return res.data;
});

// delete book by api
export const deleteBook = createAsyncThunk("deleteBook", async (id) => {
  //api/id
  const res = await axios.delete(`${base_api}/${id}`);
  return res.id; // delete id, state id data remove
});

// post book by api
export const postBook = createAsyncThunk("postBook", async (book) => {
  const res = await axios.post(base_api, book);
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
    // GET Request
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "success";
      state.books = action.payload;
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.error;
    });

    // DELETE Request
    builder.addCase(deleteBook.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.status = "success";
      state.books.splice(action.payload, 1);
    });
  },
});

export default bookSlice.reducer;
