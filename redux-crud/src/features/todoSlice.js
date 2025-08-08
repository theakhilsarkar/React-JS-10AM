import { createSlice } from "@reduxjs/toolkit"; //

const initialState = {
  todos: [
    {
      title: "Read Book for 15 min",
      status: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        title: action.payload,
        status: false,
      };
      state.todos.push(newTodo);
    },

    remove: (state, action) => {
      const index = action.payload;
      state.todos.splice(index, 1);
    },

    update: (state, action) => {
      const { index, title, status } = action.payload;
      state.todos[index] = { title: title, status: status };
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, update } = todoSlice.actions;

// CRUD
// 1. ID Card Generator
// 2. Notes App
// 3. LMS - ERP
// 4. e-Com
// 5. Blogs
// 6. calc - history
// 7. Timer - Clock
// 8. Twitter
// 9. Profile Page
// 10. Contact App
// 11. Chat System
// 12. Invoice Generator
// 13. Appointment Management
// 14. Inventory
// 15. Train Ticket
// 16. Registration Form
// 17. Hotel Booking
// 18. Emails
// 19. Budget Tracking
// 20. Stock Trading
// 21. Music Playlist
// 22. Add to Favourite
// 23. Book Management
// 24. Classroom
