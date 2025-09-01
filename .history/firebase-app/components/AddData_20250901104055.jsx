import React from "react";
import { store } from "../firebase";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";

export default function AddData() {
  const handleInput = () => {
    addDoc(collection(store, "books"), {
      title: "The Secret Part 2",
      price: 899.9,
      author: "Rhonda Byrne",
      createdAt: Timestamp.now(),
    })
      .then((result) => alert("book added successfully !!"))
      .catch((err) => alert("input failed !", err));
  };

  const handleReadBooks = () => {};

  return (
    <div>
      <button onClick={handleInput}>Add Data</button>
    </div>
  );
}
