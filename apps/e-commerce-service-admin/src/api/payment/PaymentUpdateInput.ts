import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { RefundUpdateManyWithoutPaymentsInput } from "./RefundUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  order?: OrderWhereUniqueInput | null;
  paymentDate?: Date | null;
  paymentMethod?: "Option1" | null;
  refunds?: RefundUpdateManyWithoutPaymentsInput;
};
