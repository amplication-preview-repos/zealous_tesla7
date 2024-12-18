import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationCreateInput = {
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
