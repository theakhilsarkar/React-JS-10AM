import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import AddData from "../components/AddData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SignUp />
      <SignIn /> */}
      <AddData />
    </>
  );
}

export default App;
