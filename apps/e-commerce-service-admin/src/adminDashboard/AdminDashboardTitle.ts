import { AdminDashboard as TAdminDashboard } from "../api/adminDashboard/AdminDashboard";

export const ADMINDASHBOARD_TITLE_FIELD = "adminUser";

export const AdminDashboardTitle = (record: TAdminDashboard): string => {
  return record.adminUser?.toString() || String(record.id);
};
