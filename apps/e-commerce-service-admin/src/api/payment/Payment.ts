import { Order } from "../order/Order";
import { Refund } from "../refund/Refund";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  paymentDate: Date | null;
  paymentMethod?: "Option1" | null;
  refunds?: Array<Refund>;
  updatedAt: Date;
};
