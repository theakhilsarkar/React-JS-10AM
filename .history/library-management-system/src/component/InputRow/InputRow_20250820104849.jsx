import React, { useState } from "react";

export default function InputRow() {
  const [] = useState("");
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>Add Book</button>
    </div>
  );
}
