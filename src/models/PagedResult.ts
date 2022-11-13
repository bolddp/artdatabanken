export interface PagedResult<T> {
  records: T[];
  skip: number;
  take: number;
  totalCount: number;
}

export interface Pagination {
  skip: number;
  take: number;
}
