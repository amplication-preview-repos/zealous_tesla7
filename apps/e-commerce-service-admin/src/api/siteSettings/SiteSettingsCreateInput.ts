import { InputJsonValue } from "../../types";

export type SiteSettingsCreateInput = {
  settingName?: string | null;
  settingValue?: InputJsonValue;
};
