import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Decrement() {
  const { decrement } = useContext(CounterContext);
  return (
    <div>
      <button onClick={decrement}>--</button>
    </div>
  );
}
