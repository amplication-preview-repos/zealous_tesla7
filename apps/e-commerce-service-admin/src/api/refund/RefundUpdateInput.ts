import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type RefundUpdateInput = {
  amount?: number | null;
  payment?: PaymentWhereUniqueInput | null;
  reason?: string | null;
  refundDate?: Date | null;
};
