import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setEmail] = useState("");

  return (
    <div>
      <input type="email" />
      <input type="password" />
      <button>Sign Up</button>
    </div>
  );
}
