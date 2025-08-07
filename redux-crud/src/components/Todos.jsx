import React, { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../features/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <p key={index}>
            {todo.title} - {todo.status ? "Completed" : "In Completed"}
            <button onClick={() => dispatch(remove(index))}>X</button>
          </p>
        );
      })}

      <button onClick={() => dispatch(add("New Task - 10am"))}>Add Todo</button>
    </div>
  );
}
