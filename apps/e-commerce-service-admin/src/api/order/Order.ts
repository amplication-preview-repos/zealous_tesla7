import { OrderStatus } from "../orderStatus/OrderStatus";
import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderStatuses?: Array<OrderStatus>;
  payments?: Array<Payment>;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
