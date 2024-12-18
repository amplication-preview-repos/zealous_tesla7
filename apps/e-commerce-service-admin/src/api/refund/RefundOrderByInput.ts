import { SortOrder } from "../../util/SortOrder";

export type RefundOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  reason?: SortOrder;
  refundDate?: SortOrder;
  updatedAt?: SortOrder;
};
