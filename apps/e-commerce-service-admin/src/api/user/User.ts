import { Recommendation } from "../recommendation/Recommendation";
import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  recommendations?: Array<Recommendation>;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userProfiles?: Array<UserProfile>;
};
