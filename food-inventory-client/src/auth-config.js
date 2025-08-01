// Authentication and authorization configuration
export const MANAGERIAL_CODES = {
  'FOOD_ADMIN_2025': {
    role: 'admin',
    permissions: ['create_account', 'manage_inventory', 'view_reports', 'delete_items'],
    description: 'Full administrative access'
  },
  'PANTRY_MGR_2025': {
    role: 'manager', 
    permissions: ['manage_inventory', 'view_reports'],
    description: 'Inventory management access'
  }
};

export const validateManagerialCode = (code) => {
  return MANAGERIAL_CODES[code] || null;
};

export const hasPermission = (userRole, permission) => {
  const roleData = Object.values(MANAGERIAL_CODES).find(role => role.role === userRole);
  return roleData ? roleData.permissions.includes(permission) : false;
};