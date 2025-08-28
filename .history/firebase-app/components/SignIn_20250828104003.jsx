import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/app";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {};
  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Sign In</button>
    </div>
  );
}
