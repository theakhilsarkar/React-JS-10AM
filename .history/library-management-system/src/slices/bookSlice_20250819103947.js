import { createSlice } from "@reduxjs/toolkit";


// api calling

// n
// pending
// fullfilled
// error/rejected

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    status: 'loading'
  },
});
