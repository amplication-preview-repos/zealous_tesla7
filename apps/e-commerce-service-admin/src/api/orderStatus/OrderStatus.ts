import { Order } from "../order/Order";

export type OrderStatus = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
