export interface Response<T> {
  data: T;
  message: string;
}

export interface PageResult<T> {
  total: number;
  records: Array<T>;
}
