import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShippingWhereUniqueInput } from "../shipping/ShippingWhereUniqueInput";

export type DeliveryWhereInput = {
  deliveryAddress?: StringNullableFilter;
  deliveryDate?: DateTimeNullableFilter;
  deliveryStatus?: "Option1";
  id?: StringFilter;
  shipping?: ShippingWhereUniqueInput;
};
