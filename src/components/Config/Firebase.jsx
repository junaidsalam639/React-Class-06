// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection , addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVsv1MYLThEimC-6EXd4oY7N-960GP-Bw",
  authDomain: "react-85e4f.firebaseapp.com",
  projectId: "react-85e4f",
  storageBucket: "react-85e4f.appspot.com",
  messagingSenderId: "815980757879",
  appId: "1:815980757879:web:3b044e46d938a2bafb1772",
  measurementId: "G-XLDLP79KFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app , db , collection , addDoc}