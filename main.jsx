

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { AppProvider } from "./context/appcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);