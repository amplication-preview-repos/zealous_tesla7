import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailCampaignWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  recipients?: JsonFilter;
  sentDate?: DateTimeNullableFilter;
  subject?: StringNullableFilter;
};
