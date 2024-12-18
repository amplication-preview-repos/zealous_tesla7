import { OrderStatus } from "../orderStatus/OrderStatus";
import { Payment } from "../payment/Payment";
import { Shipping } from "../shipping/Shipping";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderStatuses?: Array<OrderStatus>;
  payments?: Array<Payment>;
  shippings?: Array<Shipping>;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
