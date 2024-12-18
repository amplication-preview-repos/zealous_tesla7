import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SiteSettingsWhereInput = {
  id?: StringFilter;
  settingName?: StringNullableFilter;
  settingValue?: JsonFilter;
};
