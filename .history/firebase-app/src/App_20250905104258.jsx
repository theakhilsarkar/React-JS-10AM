import { useState } from "react";

import "./App.css";
import SignIn from "../components/Auth/SignIn";
import { Route, Routes } from "react-router-dom";
import Users from "../components/Users/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
