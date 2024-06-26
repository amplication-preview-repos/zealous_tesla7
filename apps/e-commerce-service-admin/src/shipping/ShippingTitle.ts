import { Shipping as TShipping } from "../api/shipping/Shipping";

export const SHIPPING_TITLE_FIELD = "trackingNumber";

export const ShippingTitle = (record: TShipping): string => {
  return record.trackingNumber?.toString() || String(record.id);
};
