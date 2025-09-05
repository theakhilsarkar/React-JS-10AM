import { useState } from "react";

import "./App.css";
import SignIn from "../components/Auth/SignIn";
import moduleName from 'module'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignIn />
    </>
  );
}

export default App;
