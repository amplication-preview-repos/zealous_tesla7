import { FeedbackCreateNestedManyWithoutProductsInput } from "./FeedbackCreateNestedManyWithoutProductsInput";
import { RecommendationCreateNestedManyWithoutProductsInput } from "./RecommendationCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  feedbacks?: FeedbackCreateNestedManyWithoutProductsInput;
  recommendations?: RecommendationCreateNestedManyWithoutProductsInput;
};
