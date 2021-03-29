import { Button, Container } from "@material-ui/core";
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { login, register } from "../../actions/authActions";
import { useAuthState, useAuthDispatch } from "../../context/context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {}
}));

//TODO: Add styles to page

const OtpPage = (props) => {
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const { loading, errorMessage } = useAuthState();

  const [otp, setOtp] = useState("");

  const handleClick = () => {
    if (otp.length === 6) {
      if (props.action === "login") {
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
    } else {
      console.log("Please input full otp"); // TODO: Display error message on the form here
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
    </Container>
  );
};

export default OtpPage;
