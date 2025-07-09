// manages user creation (link to auth??)
import { getDatabase, ref, set } from "firebase/database";

export function addUser(userId, userData) {
  const db = getDatabase();
  const userRef = ref(db, `users/${userId}`);
  set(userRef, userData);
}
