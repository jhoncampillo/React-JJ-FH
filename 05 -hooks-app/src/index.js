import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
//import { CounterWhitCustomHook } from "./components/01-useState/CounterWhitCustomHook";
import "./index.css";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./components/01-useState/CounterApp";

ReactDOM.render(
  <SimpleForm />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
