import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
