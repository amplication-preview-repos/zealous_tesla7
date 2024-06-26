import { SortOrder } from "../../util/SortOrder";

export type ShippingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  shippingCost?: SortOrder;
  shippingDate?: SortOrder;
  shippingMethod?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
};
