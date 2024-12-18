import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
