import React, { useEffect, useRef, useState } from "react";
import { store } from "../../firebase";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import "./ChatView.css";

export default function ChatView() {
  const msgRef1 = useRef("");
  const msgRef2 = useRef("");
  const [messages, setMessages] = useState([]);

  const handleSendMessageUser1 = () => {
    const msg = msgRef1.current.value;
    if (msg !== "") {
      addDoc(collection(store, "chats"), {
        sender: "user-1",
        msg: msg.trim(),
        time: Timestamp.now(),
      })
        // .then((result) => alert("message sent successfully !"))
        .catch((err) => alert("cant send message!", err));
      handleGetMessages();
    }
  };

    const handleSendMessageUser2 = () => {
    const msg = msgRef2.current.value;
    if (msg !== "") {
      addDoc(collection(store, "chats"), {
        sender: "user-2",
        msg: msg.trim(),
        time: Timestamp.now(),
      })
        // .then((result) => alert("message sent successfully !"))
        .catch((err) => alert("cant send message!", err));
      handleGetMessages();
    }
  };

  const handleGetMessages = async () => {
    let msgList = [];
    const querySnapshot = await getDocs(collection(store, "chats"));
    msgList = querySnapshot.docs.map((msg) => msg.data());
    msgList.sort((a, b) => a.time - b.time);
    setMessages(msgList);
  };

  useEffect(() => {
    handleGetMessages();
  }, []);

  return (
    <div className="main">
      <div className="chat-view">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="msg-box">
              <span>{msg.msg}</span>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input type="text" ref={msgRef} />
          <button onClick={handleSendMessageUser1}>Send</button>
        </div>
      </div>

      <div className="chat-view">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="msg-box">
              <span>{msg.msg}</span>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input type="text" ref={msgRef} />
          <button onClick={handleSendMessageUse}>Send</button>
        </div>
      </div>
    </div>
  );
}

// two way chating
// multi users
