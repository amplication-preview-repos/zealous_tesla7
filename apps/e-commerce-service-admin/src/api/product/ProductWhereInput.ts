import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  recommendations?: RecommendationListRelationFilter;
};
