import { InputJsonValue } from "../../types";

export type EmailCampaignCreateInput = {
  content?: string | null;
  recipients?: InputJsonValue;
  sentDate?: Date | null;
  subject?: string | null;
};
