import React, { useEffect, useRef, useState } from "react";
import { store } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
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
    msgRef1.current.value = "";
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
    msgRef2.current.value = "";
  };

  const handleGetMessages = async () => {
    let msgList = [];
    const querySnapshot = await getDocs(collection(store, "chats"));
    msgList = querySnapshot.docs.map((msg) => {
      let data = msg.data(); // object
      data = {...data,id:msg.id}
    });
    msgList.sort((a, b) => a.time - b.time);
    setMessages(msgList);
  };

  const handleDeleteMessage = (id) => {
    deleteDoc(doc(store, "chats", id)).then(() => {
      handleGetMessages(); //
      alert("message deleted !");
    });
  };

  useEffect(() => {
    handleGetMessages();
  }, []);

  return (
    <div className="main">
      <div className="chat-view">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              onDoubleClick={() => handleDeleteMessage()}
              className={`msg-box ${
                msg.sender === "user-1" ? "right" : "left"
              }`}
            >
              <span>{msg.msg}</span>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input type="text" ref={msgRef1} />
          <button onClick={handleSendMessageUser1}>Send</button>
        </div>
      </div>

      <div className="chat-view">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`msg-box ${
                msg.sender === "user-2" ? "right" : "left"
              }`}
            >
              <span>{msg.msg}</span>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input type="text" ref={msgRef2} />
          <button onClick={handleSendMessageUser2}>Send</button>
        </div>
      </div>
    </div>
  );
}

// two way chating
// multi users
