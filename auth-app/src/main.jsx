import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, useNavigate } from "react-router-dom";

// Custom wrapper to use React Router navigation inside Auth0Provider
const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  // Callback after Auth0 login
  const onRedirectCallback = (appState) => {
    // Navigate to the page user wanted, or fallback to "/"
    navigate(appState?.returnTo || window.location.pathname, { replace: true });
  };

  return (
    <Auth0Provider
      domain="dev-5oqu3ayavdwaanpv.us.auth0.com" // e.g. dev-xyz123.us.auth0.com
      clientId="hWjtUnpBEVakDB65txLe71XvH4UizaMG" // from Auth0 dashboard
      authorizationParams={{
        redirect_uri: window.location.origin, // redirect back to app after login
      }}
      cacheLocation="localstorage" // persist login on refresh
      useRefreshTokens={true} // keep session alive
      onRedirectCallback={onRedirectCallback} // handle navigation after login
    >
      {children}
    </Auth0Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
