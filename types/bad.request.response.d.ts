export type TBadRequestResponse = {
  fieldError?: [
    {
      field: string;
      errorMessage: string;
    }
  ];
  errorType?: string;
  statusCode?: number;
  message: string;
};
