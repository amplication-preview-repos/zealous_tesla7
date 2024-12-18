import { User } from "../user/User";

export type HelpDesk = {
  createdAt: Date;
  createdDate: Date | null;
  description: string | null;
  id: string;
  issueType?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
