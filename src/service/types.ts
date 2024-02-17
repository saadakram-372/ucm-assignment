export interface APIResponseType<T> {
  total_pages: number;
  total_results: number;
  page: number;
  results: Array<T>;
}
