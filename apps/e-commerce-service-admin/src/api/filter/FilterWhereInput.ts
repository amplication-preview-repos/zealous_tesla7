import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FilterWhereInput = {
  criteria?: StringNullableFilter;
  id?: StringFilter;
  value?: StringNullableFilter;
};
