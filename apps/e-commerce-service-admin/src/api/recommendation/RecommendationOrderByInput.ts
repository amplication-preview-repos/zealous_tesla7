import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
