import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoyaltyProgramUpdateInput = {
  earnedDate?: Date | null;
  points?: number | null;
  tier?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
