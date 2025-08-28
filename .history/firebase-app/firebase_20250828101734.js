
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATxXsAn6QpW7TRc9LL0yk_KhUS1AjugIs",
  authDomain: "react-book-10am.firebaseapp.com",
  projectId: "react-book-10am",
  storageBucket: "react-book-10am.firebasestorage.app",
  messagingSenderId: "219388670787",
  appId: "1:219388670787:web:321abce715de71512b35f6",
  measurementId: "G-X5PMS01TM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
