import { Delivery } from "../delivery/Delivery";
import { Order } from "../order/Order";

export type Shipping = {
  createdAt: Date;
  deliveries?: Array<Delivery>;
  id: string;
  order?: Order | null;
  shippingCost: number | null;
  shippingDate: Date | null;
  shippingMethod?: "Option1" | null;
  trackingNumber: string | null;
  updatedAt: Date;
};
