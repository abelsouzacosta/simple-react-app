import React from "react";
import ReactDOM from "react-dom"; // responsável por manipualar a DOM do navaegador
import "./styles/global-styles.css";
import Home from "./templates/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
