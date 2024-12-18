import { Shipping } from "../shipping/Shipping";

export type Delivery = {
  createdAt: Date;
  deliveryAddress: string | null;
  deliveryDate: Date | null;
  deliveryStatus?: "Option1" | null;
  id: string;
  shipping?: Shipping | null;
  updatedAt: Date;
};
