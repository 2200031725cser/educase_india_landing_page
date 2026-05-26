import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "../src/router";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
