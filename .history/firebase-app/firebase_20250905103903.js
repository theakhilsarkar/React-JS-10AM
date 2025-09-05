import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, collection, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
export const auth = getAuth(app);

export const signInWithEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then(() => {
    addDoc(collection(store, "users"), {
      email: email,
      password
    });
  });
};

// Presentation Date - 08/09/2025, Monday

// 1. project description all features
// 2. presentation - role wise work,
// 3. live demonstration of website

// database

// relational - table, tabular form - row,col
// non-relational - document & collection

// collection(folder) - it can hold multiple docs.
// document - data(key-value),collection

// collection --> docs(unique id, doc id)
