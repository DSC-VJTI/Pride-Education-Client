import { Card, Container } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { login, register } from "../../actions/authActions";
import { useAuthState, useAuthDispatch } from "../../context/context";
import { useHistory } from "react-router-dom";
import { Button } from "../UI Elements/Button";
import Otp from "../../assets/images/OtpImages/otp.svg";

const useStyles = makeStyles(() => ({
  card: {}
}));

//TODO: Add styles to page

const OtpPage = (props) => {
  const [error, setError] = useState("");
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const { loading, errorMessage } = useAuthState();

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
          console.log(res);
          history.push("/");
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
            setError("There was an error. Please try again");
          } else {
            console.log(res);
            history.push("/");
          }
        });
      }
    } else {
      setError("Please input full otp"); // TODO: Display error message on the form here
    }
  };

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f1f1f1"
      }}
    >
      <Card
        style={{
          height: "50vh",
          width: "40vw",
          display: "grid",
          placeItems: "center"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#f26522"
          }}
        >
          Let's confirm your identity
        </h2>
        <img src={Otp} height="100vh" width="100%" alt="OTP Avatar" />
        <p>Check your email for the OTP and enter below to proceed</p>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          separator={<span>-</span>}
        />

        <Button onClick={handleClick} text="Verify OTP" />
        <small style={{ color: "red" }}>{error}</small>
      </Card>
    </main>
  );
};

export default OtpPage;
