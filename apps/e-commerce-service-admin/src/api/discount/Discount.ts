export type Discount = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  discountAmount: number | null;
  id: string;
  updatedAt: Date;
  validFrom: Date | null;
  validTo: Date | null;
};
