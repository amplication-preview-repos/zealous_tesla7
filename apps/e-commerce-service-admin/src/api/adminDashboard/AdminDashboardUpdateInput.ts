import { InputJsonValue } from "../../types";

export type AdminDashboardUpdateInput = {
  adminUser?: string | null;
  dashboardData?: InputJsonValue;
};
