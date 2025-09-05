import React from "react";

import "./SignIn.css";
import {useN} from "react-router-dom";

export default function SignIn() {
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
