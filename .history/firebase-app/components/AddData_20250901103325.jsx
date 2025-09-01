import React from "react";
import { store } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddData() {
  const handleInput = async () => {
    await addDoc(collection(store, "books"), {
      title: "The Secret Part 2",
      
    });
  };

  return (
    <div>
      <button>Add Data</button>
    </div>
  );
}
