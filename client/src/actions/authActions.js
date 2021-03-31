import axios from "axios";
import { BASE_URL } from "../constants";

export const sendOTP = ({ dispatch, email, type }) => {
  dispatch({ type: "REQUEST_LOGIN" });
  return axios
    .post(BASE_URL + `/sendOtp${type}`, { email: email })
    .then((res) => {
      return {
        data: res.data,
        status: res.status
      };
    })
    .catch((err) => {
      dispatch({ type: "LOGIN_ERROR", error: err });
      return {
        error: err.response.data.error,
        status: err.response.status
      };
    });
};

export const login = ({ dispatch, hash, otp, email }) => {
  dispatch({ type: "REQUEST_LOGIN" });
  return axios
    .post(BASE_URL + "/login", {
      email: email,
      hash: hash,
      otp: otp
    })
    .then((res) => {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      return {
        data: res.data,
        status: res.status
      };
    })
    .catch((err) => {
      return {
        error: err.response.data.error,
        status: err.response.status
      };
    });
};

export const register = ({ dispatch, data }) => {
  dispatch({ type: "REQUEST_LOGIN" });
  return axios
    .post(BASE_URL + "/register", data)
    .then((res) => {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      return {
        data: res.data,
        status: res.status
      };
    })
    .catch((err) => {
      return {
        error: err.response.data.error,
        status: err.response.status
      };
    });
};
