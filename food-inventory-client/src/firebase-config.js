// Import what you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyA_NDLyRVNuQz7Zvo-68KQJp2ytF0aHm48",
  authDomain: "foodpantry-38846.firebaseapp.com",
  databaseURL: "https://foodpantry-38846-default-rtdb.firebaseio.com",
  projectId: "foodpantry-38846",
  storageBucket: "foodpantry-38846.firebasestorage.app",
  messagingSenderId: "91718249442",
  appId: "1:91718249442:web:c8827c43eeb3bfd83e27bb",
  measurementId: "G-7LEM9C9MSN"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth };