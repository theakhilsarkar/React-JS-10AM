import { useState } from "react";

import "./App.css";
import SignIn from "../components/Auth/SignIn";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
