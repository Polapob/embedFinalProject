import { AxiosError } from "axios";

const handleError = (err:unknown) => {
  const error = err as AxiosError;

  return {
    data: {},
    statusCode: error.response? error.response.status : 500,
    errorMessage: error.message,
  };
};
export default handleError;
