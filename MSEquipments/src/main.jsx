import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmQyrs55lFDdHAu1Bzz2HVhKVUX8O1SFU",
  authDomain: "databaseproyectofinal.firebaseapp.com",
  projectId: "databaseproyectofinal",
  storageBucket: "databaseproyectofinal.appspot.com",
  messagingSenderId: "464831644040",
  appId: "1:464831644040:web:d462379db893aca3e33a3d",
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
