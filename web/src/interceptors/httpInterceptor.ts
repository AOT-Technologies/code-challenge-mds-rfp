import axios from "axios";

const isHandlerEnabled = (config: any = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

const requestHandler = (request: any) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    request.headers["Content-Type"] = "application/json";
    // request.headers["Authorization"] =
    //   "Bearer " + localStorage.getItem("token");
  }
  return request;
};

const errorHandler = (error: any) => {
  if (isHandlerEnabled(error)) {
    // Handle errors
  }
  return Promise.reject({ ...error });
};

const successHandler = (response: any) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return Promise.resolve(response);
};

export const setHttpInterceptor = () => {
  axios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  );

  axios.interceptors.response.use(
    (request) => successHandler(request),
    (error) => errorHandler(error)
  );
};
