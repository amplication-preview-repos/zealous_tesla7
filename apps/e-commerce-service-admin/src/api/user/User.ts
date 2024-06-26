import { Cart } from "../cart/Cart";
import { Feedback } from "../feedback/Feedback";
import { HelpDesk } from "../helpDesk/HelpDesk";
import { Order } from "../order/Order";
import { Recommendation } from "../recommendation/Recommendation";
import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  helpDesks?: Array<HelpDesk>;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  recommendations?: Array<Recommendation>;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userProfiles?: Array<UserProfile>;
  wishlists?: Array<Wishlist>;
};
