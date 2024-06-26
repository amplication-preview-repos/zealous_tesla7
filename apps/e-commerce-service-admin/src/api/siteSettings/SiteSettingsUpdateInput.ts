import { InputJsonValue } from "../../types";

export type SiteSettingsUpdateInput = {
  settingName?: string | null;
  settingValue?: InputJsonValue;
};
