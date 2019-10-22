import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB208SDh0OgNQ2UdAxgbc0XH9Nfifz6xVw",
  authDomain: "react-drum-machine-6f184.firebaseapp.com",
  databaseURL: "https://react-drum-machine-6f184.firebaseio.com",
  projectId: "react-drum-machine-6f184",
  storageBucket: "react-drum-machine-6f184.appspot.com",
  messagingSenderId: "372599444775",
  appId: "1:372599444775:web:ff2a718f964c4acd74c502",
  measurementId: "G-443NBDT5PT"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
