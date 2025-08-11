// 1. createContext

import { createContext, useState } from "react";
import Counter from "../components/Counter";
import Increment from "./Increment";
import Decrement from "./Decrement";

export const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1); // count+1
  const decrement = () => setCount(count - 1); // count+1
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;

// what is price of your tongue.
// commitment value

// monday - break - 

// Firebase - Google Product
// online cloud store - 5 GB - texts
// auth - google

// make your own backend
// server - charges - 100

// API
// client -request=> API =>server
// server -response=> client
