export type DiscountUpdateInput = {
  code?: string | null;
  description?: string | null;
  discountAmount?: number | null;
  validFrom?: Date | null;
  validTo?: Date | null;
};