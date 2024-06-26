import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderStatusListRelationFilter } from "../orderStatus/OrderStatusListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderStatuses?: OrderStatusListRelationFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
