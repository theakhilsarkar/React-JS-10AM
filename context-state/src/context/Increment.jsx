import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Increment() {
  const { increment } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}>++</button>
    </div>
  );
}
