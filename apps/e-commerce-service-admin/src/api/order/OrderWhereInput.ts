import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderStatusListRelationFilter } from "../orderStatus/OrderStatusListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { ShippingListRelationFilter } from "../shipping/ShippingListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderStatuses?: OrderStatusListRelationFilter;
  payments?: PaymentListRelationFilter;
  shippings?: ShippingListRelationFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
