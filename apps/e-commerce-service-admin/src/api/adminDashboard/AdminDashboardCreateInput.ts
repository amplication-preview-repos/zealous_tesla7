import { InputJsonValue } from "../../types";

export type AdminDashboardCreateInput = {
  adminUser?: string | null;
  dashboardData?: InputJsonValue;
};
