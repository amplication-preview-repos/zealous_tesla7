import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { HelpDeskUpdateManyWithoutUsersInput } from "./HelpDeskUpdateManyWithoutUsersInput";
import { LoyaltyProgramUpdateManyWithoutUsersInput } from "./LoyaltyProgramUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { RecommendationUpdateManyWithoutUsersInput } from "./RecommendationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  carts?: CartUpdateManyWithoutUsersInput;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  firstName?: string | null;
  helpDesks?: HelpDeskUpdateManyWithoutUsersInput;
  lastName?: string | null;
  loyaltyPrograms?: LoyaltyProgramUpdateManyWithoutUsersInput;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  recommendations?: RecommendationUpdateManyWithoutUsersInput;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
};
