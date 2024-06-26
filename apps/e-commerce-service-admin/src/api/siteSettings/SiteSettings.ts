import { JsonValue } from "type-fest";

export type SiteSettings = {
  createdAt: Date;
  id: string;
  settingName: string | null;
  settingValue: JsonValue;
  updatedAt: Date;
};
