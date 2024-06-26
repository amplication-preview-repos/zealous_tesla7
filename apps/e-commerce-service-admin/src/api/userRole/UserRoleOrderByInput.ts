import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roleDescription?: SortOrder;
  roleName?: SortOrder;
  updatedAt?: SortOrder;
};
