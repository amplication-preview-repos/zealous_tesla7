import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HelpDeskWhereInput = {
  createdDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  issueType?: "Option1";
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
