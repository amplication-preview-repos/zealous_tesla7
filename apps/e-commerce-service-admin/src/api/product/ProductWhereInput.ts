import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type ProductWhereInput = {
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  recommendations?: RecommendationListRelationFilter;
};
