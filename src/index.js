import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCQk4qrezpGnvS81VFjAfLgebwckpuG7vQ",
  authDomain: "upax-73a72.firebaseapp.com",
  databaseURL: "https://upax-73a72.firebaseio.com",
  projectId: "upax-73a72",
  storageBucket: "upax-73a72.appspot.com",
  messagingSenderId: "724128998918",
  appId: "1:724128998918:web:bf940f95ffb2c8bf4bc587",
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
