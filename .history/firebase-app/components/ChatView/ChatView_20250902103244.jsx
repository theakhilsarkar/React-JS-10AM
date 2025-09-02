import React, { useRef } from "react";
import { store } from "../../firebase";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import "./ChatView.css";

export default function ChatView() {
  const msgRef = useRef("");
  

  const handleSendMessage = () => {
    const msg = msgRef.current.value;
    if (msg !== "") {
      addDoc(collection(store, "chats"), {
        msg: msg.trim(),
        time: Timestamp.now(),
      })
        .then((result) => alert("message sent successfully !"))
        .catch((err) => alert("cant send message!", err));
    }
  };

  const handleGetMessages = async () => {
    let msgList = [];
    const querySnapshot = await getDocs(collection(store, "chats"));
    msgList = querySnapshot.docs.map((msg) => msg.data());
  };

  return (
    <div className="chat-view">
      <div className="chat-box"></div>
      <div className="input-box">
        <input type="text" ref={msgRef} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
