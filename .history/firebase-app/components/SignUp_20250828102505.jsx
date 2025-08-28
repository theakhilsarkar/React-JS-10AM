import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <button>Sign Up</button>
    </div>
  );
}
