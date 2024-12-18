import { DeliveryUpdateManyWithoutShippingsInput } from "./DeliveryUpdateManyWithoutShippingsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShippingUpdateInput = {
  deliveries?: DeliveryUpdateManyWithoutShippingsInput;
  order?: OrderWhereUniqueInput | null;
  shippingCost?: number | null;
  shippingDate?: Date | null;
  shippingMethod?: "Option1" | null;
  trackingNumber?: string | null;
};
