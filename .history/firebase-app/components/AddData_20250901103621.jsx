import React from "react";
import { store } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddData() {
  const handleInput = async () => {
    await addDoc(collection(store, "books"), {
      title: "The Secret Part 2",
      price: 899.9,
      author: "Rhonda Byrne",
      time
    });
  };

  return (
    <div>
      <button onClick={handleInput}>Add Data</button>
    </div>
  );
}
