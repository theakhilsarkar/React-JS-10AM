import React, { useEffect, useRef, useState } from "react";
import { store } from "../../firebase";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import "./ChatView.css";

export default function ChatView() {
  const msgRef = useRef("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    const msg = msgRef.current.value;
    if (msg !== "") {
      addDoc(collection(store, "chats"), {
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
    
  );
}

// two way chating
// multi users
