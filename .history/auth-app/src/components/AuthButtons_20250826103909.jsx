import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {
        // 
        isAuthenticated ? (
        // Show logout if user is logged in
        <button
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin }, // back to home
            })
          }
        >
          Log Out
        </button>
      ) : (
        // Show login button if user is logged out
        <button
          onClick={() =>
            loginWithRedirect({
              appState: { returnTo: "/profile" }, // redirect to profile after login
            })
          }
        >
          Log In
        </button>
      )}
    </div>
  );
}