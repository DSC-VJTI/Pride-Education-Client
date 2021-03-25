import { Button, Container } from "@material-ui/core";
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";

const useStyles = makeStyles(() => ({
  card: {}
}));

const OtpPage = ({ action }) => {
  const [otp, setOtp] = useState();
  // const classes = useStyles();

  return (
    <Container>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span>-</span>}
      />

      <Button
        onClick={() => {
          console.log(otp);
        }}
      >
        getOTP
      </Button>
    </Container>
  );
};

export default OtpPage;
