import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailPassword } from "../../firebase";
import { useRef } from "react";

export default function SignIn() {
  const navigate = useNavigate();
  const email = useRef("");
  const email = useRef("");
  return (
    <div className="main">
      <div className="sign-in-box">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={() => signInWithEmailPassword()}>Sign In</button>
      </div>
    </div>
  );
}
