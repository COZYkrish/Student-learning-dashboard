import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CourseProvider } from "./context/CourseContext";
import { UserProvider } from "./context/UserContext";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CourseProvider>
        <App />
      </CourseProvider>
    </UserProvider>
  </React.StrictMode>
);
