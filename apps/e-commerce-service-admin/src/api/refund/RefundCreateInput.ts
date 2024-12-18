import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type RefundCreateInput = {
  amount?: number | null;
  payment?: PaymentWhereUniqueInput | null;
  reason?: string | null;
  refundDate?: Date | null;
};
