import { HelpDesk as THelpDesk } from "../api/helpDesk/HelpDesk";

export const HELPDESK_TITLE_FIELD = "id";

export const HelpDeskTitle = (record: THelpDesk): string => {
  return record.id?.toString() || String(record.id);
};
