import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  createdAt?: SortOrder;
  deliveryAddress?: SortOrder;
  deliveryDate?: SortOrder;
  deliveryStatus?: SortOrder;
  id?: SortOrder;
  shippingId?: SortOrder;
  updatedAt?: SortOrder;
};
