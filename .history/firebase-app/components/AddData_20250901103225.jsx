import React from "react";
import { store } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddData() {
  const handleInput = async () => {
    await addDoc();
  };

  return (
    <div>
      <button>Add Data</button>
    </div>
  );
}
