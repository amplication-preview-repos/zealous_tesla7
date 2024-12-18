import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderStatusWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  status?: "Option1";
};
