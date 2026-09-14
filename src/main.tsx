import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";   // Tailwind
import "./app.css";     // Your custom gradient + hero + ticks CSS

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
