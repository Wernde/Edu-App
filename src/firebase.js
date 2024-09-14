// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiYrJabz49X9ZP9VPTHC5YMvvWTFG2L-s",
  authDomain: "eduapp-b5050.firebaseapp.com",
  projectId: "eduapp-b5050",
  storageBucket: "eduapp-b5050.appspot.com",
  messagingSenderId: "520602173792",
  appId: "1:520602173792:web:3d02d0719dee7fdb975e05",
  measurementId: "G-YRBD9Y60TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
