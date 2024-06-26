import { EmailCampaign as TEmailCampaign } from "../api/emailCampaign/EmailCampaign";

export const EMAILCAMPAIGN_TITLE_FIELD = "subject";

export const EmailCampaignTitle = (record: TEmailCampaign): string => {
  return record.subject?.toString() || String(record.id);
};
