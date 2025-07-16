import { db } from './firebase-config.js';
import { ref, push, set, onValue, remove } from "firebase/database";

const inventoryList = document.getElementById('inventoryList');
const addForm = document.getElementById('addForm');

addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = addForm.name.value.trim();
  const quantity = parseInt(addForm.quantity.value);
  if (!name || !quantity) return;

  const itemRef = push(ref(db, 'inventory'));
  await set(itemRef, { name, quantity });
  addForm.reset();
});

onValue(ref(db, 'inventory'), (snapshot) => {
  inventoryList.innerHTML = '';
  snapshot.forEach((child) => {
    const data = child.val();
    const li = document.createElement('li');
    li.textContent = `${data.name} - ${data.quantity}`;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => remove(ref(db, `inventory/${child.key}`));
    li.appendChild(delBtn);
    inventoryList.appendChild(li);
  });
});