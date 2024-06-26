import { ShippingWhereUniqueInput } from "../shipping/ShippingWhereUniqueInput";

export type DeliveryCreateInput = {
  deliveryAddress?: string | null;
  deliveryDate?: Date | null;
  deliveryStatus?: "Option1" | null;
  shipping?: ShippingWhereUniqueInput | null;
};
