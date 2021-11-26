// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASlZ17XW49jFZ6tabk0j3q5k30QY_9cAI",
  authDomain: "sbrikkis-books-website.firebaseapp.com",
  projectId: "sbrikkis-books-website",
  storageBucket: "sbrikkis-books-website.appspot.com",
  messagingSenderId: "412054300506",
  appId: "1:412054300506:web:e145a1d79e8f0f439bb563",
  measurementId: "G-2R3M02NW0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);