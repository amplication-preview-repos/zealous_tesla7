import { SiteSettings as TSiteSettings } from "../api/siteSettings/SiteSettings";

export const SITESETTINGS_TITLE_FIELD = "settingName";

export const SiteSettingsTitle = (record: TSiteSettings): string => {
  return record.settingName?.toString() || String(record.id);
};
