import { Product } from "../product/Product";
import { User } from "../user/User";

export type Feedback = {
  comments: string | null;
  createdAt: Date;
  createdDate: Date | null;
  id: string;
  product?: Product | null;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
