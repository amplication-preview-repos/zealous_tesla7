import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DiscountWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  discountAmount?: FloatNullableFilter;
  id?: StringFilter;
  validFrom?: DateTimeNullableFilter;
  validTo?: DateTimeNullableFilter;
};
