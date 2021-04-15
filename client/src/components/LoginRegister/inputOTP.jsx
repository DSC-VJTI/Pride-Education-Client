import { React, useEffect, useState, useContext } from "react";
import { Card, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { login, register } from "../../actions/authActions";
import { useAuthState, useAuthDispatch } from "../../context/context";
import { useHistory } from "react-router-dom";
import { Button } from "../UI Elements/Button";
import Otp from "../../assets/images/OtpImages/otp.svg";
import { SnackbarContext } from "../../context/snackbarContext";
import "./css/InputOTP.css";

const OtpPage = (props) => {
  const [error, setError] = useState("");
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const { loading, errorMessage } = useAuthState();
  const [
    open,
    setOpen,
    handleClose,
    severity,
    setSeverity,
    message,
    setMessage
  ] = useContext(SnackbarContext);
  const [otp, setOtp] = useState("");

  const handleClick = () => {
    if (otp.length === 6) {
      if (props.type === "Login") {
        login({
          dispatch,
          hash: props.data.hash,
          email: props.data.email,
          otp: otp
        }).then((res) => {
          if (res.error) {
            setSeverity("error");
            setMessage(res.error);
            setOpen(true);
          } else {
            setSeverity("success");
            setMessage("You have successfully logged in.");
            setOpen(true);
            history.push("/");
          }
        });
      } else if (props.type === "Register") {
        register({
          dispatch,
          data: {
            ...props.values,
            otp: otp
          }
        }).then((res) => {
          if (res.error) {
            setSeverity("error");
            setMessage(res.error);
            setOpen(true);
          } else {
            setSeverity("success");
            setMessage("You have successfully register for the website");
            setOpen(true);
            history.push("/");
          }
        });
      }
    } else {
      setSeverity("error");
      setMessage("Please input full otp");
      setOpen(true);
    }
  };

  return (
    <section id="otpSection">
      <div className="center_div">
        <h2>Let's confirm your identity</h2>
        <img src={Otp} className="otp_avatar" alt="OTP Avatar" />
        <p className="addMarginOnTop">
          Check your email for the OTP and enter below to proceed
        </p>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          separator={<span>-</span>}
        />

        <Button onClick={handleClick} text="Verify OTP" />
        <small style={{ color: "red" }}>{error}</small>
      </div>
    </section>
  );
};

export default OtpPage;
