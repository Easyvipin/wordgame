import React from "react";
import ReactDOM from "react-dom";
import { SocketContextProvider } from "./Contexts/SocketContext";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <SocketContextProvider>
    <App />
  </SocketContextProvider>,
  document.getElementById("root")
);
