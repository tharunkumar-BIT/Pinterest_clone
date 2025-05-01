import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { PinProvider } from "./context/PinContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <PinProvider>
        <App />
      </PinProvider>
    </UserProvider>
  </StrictMode>
);
