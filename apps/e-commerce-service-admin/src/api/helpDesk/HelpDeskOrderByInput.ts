import { SortOrder } from "../../util/SortOrder";

export type HelpDeskOrderByInput = {
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  issueType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
