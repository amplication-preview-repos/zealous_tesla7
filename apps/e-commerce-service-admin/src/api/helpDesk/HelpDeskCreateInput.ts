import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HelpDeskCreateInput = {
  createdDate?: Date | null;
  description?: string | null;
  issueType?: "Option1" | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
