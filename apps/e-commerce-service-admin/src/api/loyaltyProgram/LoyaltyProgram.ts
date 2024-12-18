import { User } from "../user/User";

export type LoyaltyProgram = {
  createdAt: Date;
  earnedDate: Date | null;
  id: string;
  points: number | null;
  tier?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
