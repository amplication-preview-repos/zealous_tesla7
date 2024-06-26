import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "code";

export const DiscountTitle = (record: TDiscount): string => {
  return record.code?.toString() || String(record.id);
};
