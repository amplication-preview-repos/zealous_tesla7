import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminDashboardWhereInput = {
  adminUser?: StringNullableFilter;
  dashboardData?: JsonFilter;
  id?: StringFilter;
};
