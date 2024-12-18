import { FeedbackUpdateManyWithoutProductsInput } from "./FeedbackUpdateManyWithoutProductsInput";
import { RecommendationUpdateManyWithoutProductsInput } from "./RecommendationUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  feedbacks?: FeedbackUpdateManyWithoutProductsInput;
  recommendations?: RecommendationUpdateManyWithoutProductsInput;
};
