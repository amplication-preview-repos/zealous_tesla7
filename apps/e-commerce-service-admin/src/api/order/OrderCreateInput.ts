import { OrderStatusCreateNestedManyWithoutOrdersInput } from "./OrderStatusCreateNestedManyWithoutOrdersInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";
import { ShippingCreateNestedManyWithoutOrdersInput } from "./ShippingCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  orderStatuses?: OrderStatusCreateNestedManyWithoutOrdersInput;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  shippings?: ShippingCreateNestedManyWithoutOrdersInput;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
