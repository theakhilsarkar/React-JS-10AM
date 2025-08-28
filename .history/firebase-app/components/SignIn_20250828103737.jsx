import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" onChange={(e)=>setEmail}/>
      <input type="password" onChange={(e)=>setEmail}/>
      <button>Sign In</button>
    </div>
  );
}
