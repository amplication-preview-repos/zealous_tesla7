import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoyaltyProgramWhereInput = {
  earnedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  points?: IntNullableFilter;
  tier?: "Option1";
  user?: UserWhereUniqueInput;
};
