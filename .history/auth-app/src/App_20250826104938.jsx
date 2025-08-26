import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthButtons from "./components/AuthButtons";
import Profile from "./components/Profile";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      {/* Login/Logout buttons always visible */}
      <AuthButtons />

      <Routes>
        {/* Public route */}
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Protected route */}
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;

// sJ7wYVQ!2a!iTDc
