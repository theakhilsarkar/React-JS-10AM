import React, { useRef } from "react";
import { store } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./ChatView.css";

export default function ChatView() {
  const msgRef = useRef("");

  const handleSendMessage = () => {
    addDoc(collection(store, "chats"), {
        msg:
    });
  };

  return (
    <div className="chat-view">
      <div className="chat-box"></div>
      <div className="input-box">
        <input type="text" ref={msgRef} />
        <button>Send</button>
      </div>
    </div>
  );
}
