import { SortOrder } from "../../util/SortOrder";

export type SiteSettingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  settingName?: SortOrder;
  settingValue?: SortOrder;
  updatedAt?: SortOrder;
};
