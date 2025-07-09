//creates low/out of stock warning 
import { getDatabase, ref, push, set } from "firebase/database";

export function createStockAlert(productId, status) {
  const db = getDatabase();
  const alertRef = push(ref(db, "stockAlerts"));
  const alertData = {
    product_id: productId,
    status: status,
    triggered_at: new Date().toISOString()
  };
  set(alertRef, alertData);
}
