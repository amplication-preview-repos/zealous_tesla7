import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RefundListRelationFilter } from "../refund/RefundListRelationFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  paymentDate?: DateTimeNullableFilter;
  paymentMethod?: "Option1";
  refunds?: RefundListRelationFilter;
};
