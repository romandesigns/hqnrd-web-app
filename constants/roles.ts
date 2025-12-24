/**
 * Role constants used throughout the application for authorization and access control.
 *
 * @remarks
 * These constants define the different user roles available in the hotel management system.
 * Each role has specific permissions and access levels within the application.
 *
 * @property {string} ADMIN - Administrator role with full system access and privileges
 * @property {string} MANAGER - Manager role with elevated permissions for hotel operations
 * @property {string} RECEPTIONIST - Receptionist role with access to front desk operations
 * @property {string} GUEST - Guest role with limited access to customer-facing features
 */

export const roles = {
  ADMIN: "admin",
  MANAGER: "manager",
  RECEPTIONIST: "receptionist",
  GUEST: "guest",
};
