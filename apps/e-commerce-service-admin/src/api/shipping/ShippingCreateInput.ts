import { DeliveryCreateNestedManyWithoutShippingsInput } from "./DeliveryCreateNestedManyWithoutShippingsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShippingCreateInput = {
  deliveries?: DeliveryCreateNestedManyWithoutShippingsInput;
  order?: OrderWhereUniqueInput | null;
  shippingCost?: number | null;
  shippingDate?: Date | null;
  shippingMethod?: "Option1" | null;
  trackingNumber?: string | null;
};
