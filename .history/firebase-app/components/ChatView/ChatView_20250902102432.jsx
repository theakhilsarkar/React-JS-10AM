import React, { useRef } from "react";
import { store } from "../../firebase";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import "./ChatView.css";

export default function ChatView() {
  const msgRef = useRef("");

  const handleSendMessage = () => {
    const msgRef.current.value;

    addDoc(collection(store, "chats"), {
      msg: "hello, Good Morning",
      time: Timestamp.now(),
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
