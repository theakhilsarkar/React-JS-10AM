import React from "react";

import "./SignIn.css";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = use
  return (
    <div className="main">
      <div className="sign-in-box">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    </div>
  );
}
