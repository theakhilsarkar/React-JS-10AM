import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;

// 1. create slice - name,initialState,reduce(state,action)
// 2. configure store - reducer -> featureReducer
// 3. Wrap App with Provider and pass store = {store}
// 4. component - useSelectore(state=>), useDispatch(call-method)
// 5. action.payload -> to access passed value from dispatch call.

// todo = task
// 1. add todo from text input
// 2. remove todo
// 3. update todo

// slice - logic
// store - common point to access data
//

// array
// item remove --> index, splice
