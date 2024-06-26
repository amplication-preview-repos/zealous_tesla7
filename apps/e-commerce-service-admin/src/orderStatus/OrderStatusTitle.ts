import { OrderStatus as TOrderStatus } from "../api/orderStatus/OrderStatus";

export const ORDERSTATUS_TITLE_FIELD = "id";

export const OrderStatusTitle = (record: TOrderStatus): string => {
  return record.id?.toString() || String(record.id);
};
