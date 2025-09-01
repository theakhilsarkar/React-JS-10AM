import React from "react";
import { store } from "../firebase";
import {collection,addDoc} from "firebase/firestore";

export default function AddData() {
  return (
    <div>
      <button>Add Data</button>
    </div>
  );
}
