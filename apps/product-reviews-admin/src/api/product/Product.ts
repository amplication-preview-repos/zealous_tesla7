import { Review } from "../review/Review";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
