import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoyaltyProgramCreateInput = {
  earnedDate?: Date | null;
  points?: number | null;
  tier?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
