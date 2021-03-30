import { Button, Container } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { login, register } from "../../actions/authActions";
import { useAuthState, useAuthDispatch } from "../../context/context";
import { useHistory } from "react-router-dom";
import data from "../DashboardLayout/ProductListView/data";

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
      }
      if (props.type === "Register") {
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
    <Container>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span>-</span>}
      />

      <Button onClick={handleClick}>Verify OTP</Button>
      <small style={{ color: "red" }}>{error}</small>
    </Container>
  );
};

export default OtpPage;
