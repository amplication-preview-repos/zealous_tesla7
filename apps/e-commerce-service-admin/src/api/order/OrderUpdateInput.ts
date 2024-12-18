import { OrderStatusUpdateManyWithoutOrdersInput } from "./OrderStatusUpdateManyWithoutOrdersInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { ShippingUpdateManyWithoutOrdersInput } from "./ShippingUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderStatuses?: OrderStatusUpdateManyWithoutOrdersInput;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  shippings?: ShippingUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
