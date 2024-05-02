// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLCOVPys9-efDNUKkMXr2TN6CFKcuDLQE",
  authDomain: "opt-register.firebaseapp.com",
  projectId: "opt-register",
  storageBucket: "opt-register.appspot.com",
  messagingSenderId: "1030039962821",
  appId: "1:1030039962821:web:bd40543ff440455487dcac",
  measurementId: "G-QKQV4K4BQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)