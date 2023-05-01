// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpAP4krUvwUHqdRJzbgrPAxlhdLZD_Qks",
  authDomain: "chef-recipe-assignment.firebaseapp.com",
  projectId: "chef-recipe-assignment",
  storageBucket: "chef-recipe-assignment.appspot.com",
  messagingSenderId: "145933826921",
  appId: "1:145933826921:web:d97e3ebe30ce51e3e4dbf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;