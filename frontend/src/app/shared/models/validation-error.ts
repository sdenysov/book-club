export interface ValidationError {
  type: string;
  params?: { [key: string]: any };
}
