// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATxXsAn6QpW7TRc9LL0yk_KhUS1AjugIs",
  authDomain: "react-book-10am.firebaseapp.com",
  projectId: "react-book-10am",
  storageBucket: "react-book-10am.firebasestorage.app",
  messagingSenderId: "219388670787",
  appId: "1:219388670787:web:e51cca140b183c9f2b35f6",
  measurementId: "G-HHVMNLL86C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// variable
// array - index
// object
// array of object - json
// tabular - table - row-col
// document-collection

// collection - is group of multiple documents - folder
// documents - documents is group of multiple collections or data(key - value pair). - file

// doc id - access

// socket api - real time database - live api --> stream --> continuos
// chat
// cloud firestore

// authentication
// cloud firestore - text - real time/stream
// s
