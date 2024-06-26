import { User } from "../user/User";

export type Cart = {
  createdAt: Date;
  id: string;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
