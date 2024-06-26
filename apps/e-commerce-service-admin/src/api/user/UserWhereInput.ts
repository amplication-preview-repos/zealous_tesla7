import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
  userProfiles?: UserProfileListRelationFilter;
};
