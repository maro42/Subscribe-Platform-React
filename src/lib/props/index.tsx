export type TableHeader = {
  label: string;
  property: string;
};

export type TableResponse<T> = {
  header: TableHeader[];
  content: T[];
  totalCount: number;
};

export type ListResponse<T> = {
  content: T[];
  totalCount: number;
};

export type SelectBoxResponse = {
  value: string | number;
  label: string;
};

export type PagebleRequest = {
  pageNum: number;
  size: number;
};
