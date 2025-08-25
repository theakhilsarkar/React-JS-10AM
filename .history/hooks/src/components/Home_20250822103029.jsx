import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button>++</button>
    </div>
  );
}
// count state

// Home component
