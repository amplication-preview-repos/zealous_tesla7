import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShippingWhereInput = {
  deliveries?: DeliveryListRelationFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  shippingCost?: FloatNullableFilter;
  shippingDate?: DateTimeNullableFilter;
  shippingMethod?: "Option1";
  trackingNumber?: StringNullableFilter;
};
