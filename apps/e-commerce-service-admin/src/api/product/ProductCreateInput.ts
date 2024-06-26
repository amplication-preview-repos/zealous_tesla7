import { RecommendationCreateNestedManyWithoutProductsInput } from "./RecommendationCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  recommendations?: RecommendationCreateNestedManyWithoutProductsInput;
};
