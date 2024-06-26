import { SortOrder } from "../../util/SortOrder";

export type AdminDashboardOrderByInput = {
  adminUser?: SortOrder;
  createdAt?: SortOrder;
  dashboardData?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
