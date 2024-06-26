import { SiteSettingsWhereInput } from "./SiteSettingsWhereInput";
import { SiteSettingsOrderByInput } from "./SiteSettingsOrderByInput";

export type SiteSettingsFindManyArgs = {
  where?: SiteSettingsWhereInput;
  orderBy?: Array<SiteSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
