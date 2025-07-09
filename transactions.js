// logs donations/distributions and links to products and users
import { getDatabase, ref, push } from "firebase/database";

export function logTransaction(txData) {
  const db = getDatabase();
  const txRef = push(ref(db, "transactions"));
  txData.timestamp = new Date().toISOString();
  return txRef.key;
}