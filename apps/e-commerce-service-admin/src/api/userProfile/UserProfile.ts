import { User } from "../user/User";

export type UserProfile = {
  address: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
