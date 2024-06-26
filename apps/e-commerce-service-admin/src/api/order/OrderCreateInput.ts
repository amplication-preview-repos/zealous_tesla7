import { OrderStatusCreateNestedManyWithoutOrdersInput } from "./OrderStatusCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  orderStatuses?: OrderStatusCreateNestedManyWithoutOrdersInput;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
