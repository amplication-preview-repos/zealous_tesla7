import { RecommendationCreateNestedManyWithoutUsersInput } from "./RecommendationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  recommendations?: RecommendationCreateNestedManyWithoutUsersInput;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
};
