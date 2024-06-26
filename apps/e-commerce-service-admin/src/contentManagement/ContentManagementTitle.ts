import { ContentManagement as TContentManagement } from "../api/contentManagement/ContentManagement";

export const CONTENTMANAGEMENT_TITLE_FIELD = "title";

export const ContentManagementTitle = (record: TContentManagement): string => {
  return record.title?.toString() || String(record.id);
};
