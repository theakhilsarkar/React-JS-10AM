import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import {signInWithEmailPassword} from '../../firebase'

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="sign-in-box">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={()=>signInWithEmailPassword()}>Sign In</button>
      </div>
    </div>
  );
}
