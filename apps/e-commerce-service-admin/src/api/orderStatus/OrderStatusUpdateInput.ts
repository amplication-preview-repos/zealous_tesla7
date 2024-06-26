import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderStatusUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
