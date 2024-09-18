export interface ApiResponse<T> {
  data: T;
  isSuccess: boolean;
  message: string;
}