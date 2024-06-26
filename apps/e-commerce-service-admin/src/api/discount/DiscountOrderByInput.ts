import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountAmount?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  validFrom?: SortOrder;
  validTo?: SortOrder;
};
