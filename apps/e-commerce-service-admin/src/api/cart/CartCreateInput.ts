import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
