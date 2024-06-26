import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RefundWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  payment?: PaymentWhereUniqueInput;
  reason?: StringNullableFilter;
  refundDate?: DateTimeNullableFilter;
};
