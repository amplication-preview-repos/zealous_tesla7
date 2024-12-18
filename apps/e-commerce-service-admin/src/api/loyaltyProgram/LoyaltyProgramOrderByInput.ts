import { SortOrder } from "../../util/SortOrder";

export type LoyaltyProgramOrderByInput = {
  createdAt?: SortOrder;
  earnedDate?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  tier?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
