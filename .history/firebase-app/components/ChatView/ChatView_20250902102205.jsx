import React, { useRef } from "react";
import { store } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./ChatView.css";

export default function ChatView() {
  const msg = useRef("");

  return (
    <div className="chat-view">
      <div className="chat-box"></div>
      <div className="input-box">
        <input type="text" />
        <button>Send</button>
      </div>
    </div>
  );
}
