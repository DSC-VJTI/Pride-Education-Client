import axios from "axios";

export const sendOTP = ({ dispatch, email }) => {
  dispatch({ type: "REQUEST_LOGIN" });
  return axios
    .post(process.env.REACT_APP_SERVER_URL + "/sendOtpLogin", { email: email })
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
    .post(process.env.REACT_APP_SERVER_URL + "/login", {
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
        error: res.response.data.error,
        status: err.response.status
      };
    });
};
