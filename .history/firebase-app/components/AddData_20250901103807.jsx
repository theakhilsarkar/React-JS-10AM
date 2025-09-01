import React from "react";
import { store } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function AddData() {
  const handleInput = () => {
     addDoc(collection(store, "books"), {
      title: "The Secret Part 2",
      price: 899.9,
      author: "Rhonda Byrne",
      createdAt: Timestamp.now(),
    }).then();
  };

  return (
    <div>
      <button onClick={handleInput}>Add Data</button>
    </div>
  );
}
