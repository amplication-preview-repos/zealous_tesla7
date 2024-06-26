import { InputJsonValue } from "../../types";

export type EmailCampaignUpdateInput = {
  content?: string | null;
  recipients?: InputJsonValue;
  sentDate?: Date | null;
  subject?: string | null;
};
