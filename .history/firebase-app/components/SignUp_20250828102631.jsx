import React, { useState } from "react";

import { getAuth } from "firebase/auth";
import moduleName from '../firebase'
const auth = getAuth();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Sign Up</button>
    </div>
  );
}
