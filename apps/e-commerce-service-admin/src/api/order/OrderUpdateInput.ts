import { OrderStatusUpdateManyWithoutOrdersInput } from "./OrderStatusUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderStatuses?: OrderStatusUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
