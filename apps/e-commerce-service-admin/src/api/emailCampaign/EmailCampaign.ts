import { JsonValue } from "type-fest";

export type EmailCampaign = {
  content: string | null;
  createdAt: Date;
  id: string;
  recipients: JsonValue;
  sentDate: Date | null;
  subject: string | null;
  updatedAt: Date;
};
