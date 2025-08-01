// Import what you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCgUBuLxWDXySSQY9mzGa1kwZJYDx80R2Q",
  authDomain: "food-inventory-a7516.firebaseapp.com",
  databaseURL: "https://food-inventory-a7516-default-rtdb.firebaseio.com",
  projectId: "food-inventory-a7516",
  storageBucket: "food-inventory-a7516.firebasestorage.app",
  messagingSenderId: "646563023531",
  appId: "1:646563023531:web:113d92cbcc2415669a45ee",
  measurementId: "G-880R0ZY0L7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth };