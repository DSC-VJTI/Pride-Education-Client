import axios from "axios";

export const sendOTP = ({ email }) => {
  return axios
    .post(process.env.REACT_APP_SERVER_URL + "/sendOtpLogin", { email: email })
    .then((res) => {
      return {
        data: res.data,
        status: res.status
      };
    })
    .catch((err) => {
      // console.log("here", err);
      return {
        error: err.response.data.error,
        status: err.response.status
      };
    });
};

export const login = ({ hash, otp, email }) => {
  return axios
    .post(process.env.REACT_APP_SERVER_URL + "/login", {
      email: email,
      hash: hash,
      otp: otp
    })
    .then((res) => {
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
