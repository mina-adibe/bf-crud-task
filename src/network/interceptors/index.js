import store from "../../store";
import { setLoader } from "../../store/actions";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    document.body.classList.add("loader_bg");
    store.dispatch(setLoader(true));
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    document.body.classList.remove("loader_bg");
    store.dispatch(setLoader(false));
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    document.body.classList.remove("loader_bg");
    store.dispatch(setLoader(false));
  }
  return Promise.reject({ ...error });
};
