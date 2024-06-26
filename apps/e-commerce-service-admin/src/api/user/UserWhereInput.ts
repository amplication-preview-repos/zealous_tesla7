import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { HelpDeskListRelationFilter } from "../helpDesk/HelpDeskListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  carts?: CartListRelationFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  helpDesks?: HelpDeskListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  recommendations?: RecommendationListRelationFilter;
  role?: "Option1";
  username?: StringFilter;
  userProfiles?: UserProfileListRelationFilter;
  wishlists?: WishlistListRelationFilter;
};
