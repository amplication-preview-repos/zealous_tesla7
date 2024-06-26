import { Payment } from "../payment/Payment";

export type Refund = {
  amount: number | null;
  createdAt: Date;
  id: string;
  payment?: Payment | null;
  reason: string | null;
  refundDate: Date | null;
  updatedAt: Date;
};
