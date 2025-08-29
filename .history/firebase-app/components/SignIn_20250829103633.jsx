import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from "../firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("user login successful !!"))
      .catch((err) => alert("user login failed ! " + err));
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user.displayName);
    });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
      <br />
      <br />
      <br />
      <button onClick={handleSignInWithGoogle}>Sign in With Google</button>
      <button onClick={() => signOut(auth).then((result)=>alert("user logged out !!")).catch((err)=>alert(""))}>Sign Out</button>

      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEilyxHhukAf0ad799cyK9qHTSVET6jla7w&s"
        alt=""
      /> */}
    </div>
  );
}
