import { SortOrder } from "../../util/SortOrder";

export type EmailCampaignOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipients?: SortOrder;
  sentDate?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
