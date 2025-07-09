// this handles adding/updating product data
import { getDatabase, ref, set, update } from "firebase/database";

export function addProduct(productId, productData) {
  const db = getDatabase();
  const productRef = ref(db, `products/${productId}`);
  set(productRef, productData);
}

export function updateProduct(productId, updates) {
  const db = getDatabase();
  const productRef = ref(db, `products/${productId}`);
  update(productRef, updates);
}
