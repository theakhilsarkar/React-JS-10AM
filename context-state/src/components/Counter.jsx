import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Counter() {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
