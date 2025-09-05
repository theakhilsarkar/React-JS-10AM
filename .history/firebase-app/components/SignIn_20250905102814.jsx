import React from "react";

export default function SignIn() {
  return (
    <div>
      <div className="sign-in-box">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    </div>
  );
}
