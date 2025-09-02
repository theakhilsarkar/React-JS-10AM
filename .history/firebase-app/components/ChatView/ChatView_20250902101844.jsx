import React from "react";
import { store } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./ChatView.css";

export default function ChatView() {
  return (
    <div className="chat-view">
      <div className="chat-box"></div>
      <div className="input-box">
        inp
      </div>
    </div>
  );
}
