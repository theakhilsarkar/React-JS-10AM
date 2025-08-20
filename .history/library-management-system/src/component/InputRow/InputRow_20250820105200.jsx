import React, { useState } from "react";

export default function InputRow() {
  const [title, setTitle] = useState("");
  const [author, setAuthot] = useState("");
  const [gener, setGener] = useState("");
  const [rent, setRent] = useState("");
  return (
    <div>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.validationMessage)} />
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.validationMessage)} />
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.validationMessage)} />
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.validationMessage)} />
      <button>Add Book</button>
    </div>
  );
}
