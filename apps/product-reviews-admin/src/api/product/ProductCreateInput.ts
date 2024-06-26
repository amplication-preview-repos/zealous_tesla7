import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
