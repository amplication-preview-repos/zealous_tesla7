import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SearchWhereInput = {
  id?: StringFilter;
  keyword?: StringNullableFilter;
};
