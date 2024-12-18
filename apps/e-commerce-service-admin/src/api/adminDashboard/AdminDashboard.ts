import { JsonValue } from "type-fest";

export type AdminDashboard = {
  adminUser: string | null;
  createdAt: Date;
  dashboardData: JsonValue;
  id: string;
  updatedAt: Date;
};
