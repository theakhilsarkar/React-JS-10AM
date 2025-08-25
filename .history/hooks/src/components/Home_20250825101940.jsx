import React, { useState } from "react";
import FirstComponent from "./FirstComponent";

export default function Home() {
  console.log("Home component is re-rendered....");
  const [count, setCount] = useState(0);
  return (
    <div>
      <FirstComponent />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
}

// count state
// Home component

// deadline
// 100%

// in class presentation
// 1.
// 2.
// 3.
// 100000/-


// Backend 


// json-server
// firebase