import { User } from "../user/User";

export type Wishlist = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
