import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/app";
import { app } from "../firebase";

const auth = getAuth(app);
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("user login successful !!"))
      .catch((err) => alert("user login failed ! " + err));
  };
  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
