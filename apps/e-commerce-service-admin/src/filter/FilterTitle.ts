import { Filter as TFilter } from "../api/filter/Filter";

export const FILTER_TITLE_FIELD = "criteria";

export const FilterTitle = (record: TFilter): string => {
  return record.criteria?.toString() || String(record.id);
};
