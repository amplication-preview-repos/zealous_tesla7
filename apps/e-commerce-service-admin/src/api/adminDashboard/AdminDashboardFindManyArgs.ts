import { AdminDashboardWhereInput } from "./AdminDashboardWhereInput";
import { AdminDashboardOrderByInput } from "./AdminDashboardOrderByInput";

export type AdminDashboardFindManyArgs = {
  where?: AdminDashboardWhereInput;
  orderBy?: Array<AdminDashboardOrderByInput>;
  skip?: number;
  take?: number;
};
