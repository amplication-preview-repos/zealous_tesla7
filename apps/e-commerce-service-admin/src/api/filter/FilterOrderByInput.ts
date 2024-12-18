import { SortOrder } from "../../util/SortOrder";

export type FilterOrderByInput = {
  createdAt?: SortOrder;
  criteria?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
