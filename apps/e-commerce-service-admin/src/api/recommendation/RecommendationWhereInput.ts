import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
