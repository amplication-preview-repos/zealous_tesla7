import { Search as TSearch } from "../api/search/Search";

export const SEARCH_TITLE_FIELD = "keyword";

export const SearchTitle = (record: TSearch): string => {
  return record.keyword?.toString() || String(record.id);
};
