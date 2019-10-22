// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const firebaseConfig = {
//   apiKey: "AIzaSyB208SDh0OgNQ2UdAxgbc0XH9Nfifz6xVw",
//   authDomain: "react-drum-machine-6f184.firebaseapp.com",
//   databaseURL: "https://react-drum-machine-6f184.firebaseio.com",
//   projectId: "react-drum-machine-6f184",
//   storageBucket: "react-drum-machine-6f184.appspot.com",
//   messagingSenderId: "372599444775",
//   appId: "1:372599444775:web:ff2a718f964c4acd74c502",
//   measurementId: "G-443NBDT5PT"
// };
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
