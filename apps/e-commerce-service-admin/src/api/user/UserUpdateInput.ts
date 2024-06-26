import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
};
