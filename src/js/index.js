//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import { SecondsCounter } from "./component/Counter.jsx";

//import your own components
let secs = 1

const timer = setInterval(() => {
  if (secs === 999999) {
    clearInterval(timer);
  }
  ReactDOM.render(
    <SecondsCounter seconds={secs} />,
    document.querySelector("#app")
  );
  secs++;
}, 1000);
//render your react application
