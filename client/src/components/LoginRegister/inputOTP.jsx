import { Button, Container } from "@material-ui/core";
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { login, register } from "../../actions/authActions";

const useStyles = makeStyles(() => ({
  card: {}
}));

const OtpPage = ({ action, data }) => {
  const [otp, setOtp] = useState();
  // const classes = useStyles();

  const handleClick = () => {
    if (action === "login") {
      login({ hash: data.hash, email: data.email, otp: otp }).then((res) => {
        console.log(res);
      });
    }
    // console.log(data);
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
