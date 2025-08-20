import React, { useState } from "react";

export default function InputRow() {
  const [title, setTitle] = useState("");
  const [author, setAuthot] = useState("");
  const [gener, setGener] = useState("");
  const [rent, setRent] = useState("");

  const h

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthot(e.target.value)}
      />
      <input
        type="text"
        value={gener}
        onChange={(e) => setGener(e.target.value)}
      />
      <input
        type="text"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />
      <button onClick={}>Add Book</button>
    </div>
  );
}
