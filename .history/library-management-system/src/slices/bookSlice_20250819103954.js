import { createSlice } from "@reduxjs/toolkit";


// api calling

// neutral
// pending
// fullfilled
// error/rejected

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    status: 'neutral'
  },
});
