import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

import { addProduct } from "./products.js";
import { logTransaction } from "./transactions.js";
import { addUser } from "./users.js";
import { createStockAlert } from "./alerts.js";

console.log("Firebase app starting...");

const firebaseConfig = {
  apiKey: "AIzaSyA_NDLyRVNuQz7Zvo-68KQJp2ytF0aHm48",
  authDomain: "foodpantry-38846.firebaseapp.com",
  databaseURL: "https://foodpantry-38846-default-rtdb.firebaseio.com", // 👈 Add this line!
  projectId: "foodpantry-38846",
  storageBucket: "foodpantry-38846.appspot.com",
  messagingSenderId: "91718249442",
  appId: "1:91718249442:web:c8827c43eeb3bfd83e27bb",
  measurementId: "G-7LEM9C9MSN"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

get(ref(db, "food-items"))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const list = document.getElementById("food-list");
      for (const [key, value] of Object.entries(data)) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        list.appendChild(li);
      }
    } else {
      console.log("No data available.");
    }
  })
  .catch((error) => {
    console.error("Firebase error:", error);
  });

// Example usage:
addProduct("101", {
  name: "Canned Beans",
  barcode: 1234567890123,
  quantity: 45,
  low_stock_limit: 10,
  purchase_limit: 5,
  storage_type: "Shelf-Stable"
});

logTransaction({
  product_id: 101,
  type: "distribution",
  quantity: 2,
  user_id: "u001",
  notes: "Emergency drop-off"
});

addUser("u001", {
  name: "Nyla Rivers",
  email: "nyla@example.com",
  role: "Admin"
});

createStockAlert("101", "low");