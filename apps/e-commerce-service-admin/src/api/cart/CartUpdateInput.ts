import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
