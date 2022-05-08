export interface Sort {
  default_title: string;
  results: SortItem[],
}

export interface SortItem {
  name: string;
  order: "asc" | "desc";
  enabled: boolean;
  translation: string;
  icon: string;
}
