import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { RefundCreateNestedManyWithoutPaymentsInput } from "./RefundCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  order?: OrderWhereUniqueInput | null;
  paymentDate?: Date | null;
  paymentMethod?: "Option1" | null;
  refunds?: RefundCreateNestedManyWithoutPaymentsInput;
};
