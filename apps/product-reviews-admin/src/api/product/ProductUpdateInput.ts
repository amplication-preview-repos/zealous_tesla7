import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
