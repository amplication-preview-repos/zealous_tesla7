import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderStatusCreateInput = {
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
