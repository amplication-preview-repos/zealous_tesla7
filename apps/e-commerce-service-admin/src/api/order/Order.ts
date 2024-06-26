import { OrderStatus } from "../orderStatus/OrderStatus";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderStatuses?: Array<OrderStatus>;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
